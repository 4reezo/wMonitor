import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { LocationPickerComponent } from '../shared/location-picker/location-picker.component';
import { widgetsActions } from './widgets.actions';
import { widgetsSelectors } from './widgets.selectors';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WidgetSettings } from '../shared/weather-widget/weather-widget.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WeatherLocation } from '../core/geo/geo.model';
import { filter, startWith, take } from 'rxjs';

const defaultSettings: WidgetSettings = {
    tempUnits: 'c',
    showTime: false,
    speedUnits: 'm',
}

@Component({
    selector: 'app-widgets',
    standalone: true,
    imports: [
        AsyncPipe,
        LocationPickerComponent,
        ReactiveFormsModule,
        WeatherWidgetComponent,
    ],
    templateUrl: './widgets.component.html',
    styleUrl: './widgets.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsComponent {
    private store = inject(Store);
    private fb = inject(FormBuilder);

    form = this.fb.group({
        location: [ null as WeatherLocation | null ],
        settings: this.fb.group(defaultSettings),
    });

    suggestedLocations$ = this.store.pipe(select(widgetsSelectors.getSuggestedLocations));
    selectWidgetPreview$ = this.store.pipe(select(widgetsSelectors.getWidgetPreview));
    editWidget$ = this.store.pipe(select(widgetsSelectors.getEditWidget));
    editWidgetId$ = this.store.pipe(select(widgetsSelectors.getEditId));

    constructor() {
        // react to location changes
        this.form.controls.location.valueChanges.pipe(
            takeUntilDestroyed(),
        ).subscribe(location => {
            this.store.dispatch(widgetsActions.pickLocation(location));
        })

        // react to settings changes
        this.form.controls.settings.valueChanges.pipe(
            takeUntilDestroyed(),
            startWith(defaultSettings), // set defaults to the store
        ).subscribe(settings => {
            this.store.dispatch(widgetsActions.pickSettings({ ...defaultSettings, ...settings as WidgetSettings }));
        });

        // if we are editing a widget, we should put it to the preview state and set form values
        this.editWidget$.pipe(
            takeUntilDestroyed(),
            take(1),
            filter(w => !!w),
        ).subscribe(widget => {
            this.store.dispatch(widgetsActions.pickLocation(widget?.location));
            this.store.dispatch(widgetsActions.pickSettings(widget?.settings));
            this.form.controls.settings.patchValue(widget?.settings);
        });
    }

    onSearch(query: string): void {
        this.store.dispatch(widgetsActions.searchLocation(query));
    }

    clearLocation() {
        this.store.dispatch(widgetsActions.pickLocation(null));
    }

    saveWidget(id?: string) {
        this.store.dispatch(widgetsActions.saveWidget(id || 'new'));
    }
}
