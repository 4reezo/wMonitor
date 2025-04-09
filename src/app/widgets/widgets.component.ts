import { Component, inject, OnInit } from '@angular/core';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { LocationPickerComponent } from '../shared/location-picker/location-picker.component';
import { widgetsActions } from './widgets.actions';
import { widgetsSelectors } from './widgets.selectors';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WeatherLocation } from '../core/geo/geo.model';

@Component({
    selector: 'app-widgets',
    standalone: true,
    imports: [
        WeatherWidgetComponent,
        AsyncPipe,
        LocationPickerComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './widgets.component.html',
    styleUrl: './widgets.component.scss',
})
export class WidgetsComponent {
    store = inject(Store);
    fb = inject(FormBuilder);

    form = this.fb.group({
        location: [ null as WeatherLocation | null ],
        settings: this.fb.group({
            tempUnits: 'C',
        }),
    });

    suggestedLocations$ = this.store.pipe(select(widgetsSelectors.getSuggestedLocations));
    selectedLocation$ = this.store.pipe(select(widgetsSelectors.getSelectedLocation));

    widget?: WeatherWidget = undefined;

    constructor() {
        // react to location changes
        this.form.controls.location.valueChanges.pipe(
            takeUntilDestroyed(),
        ).subscribe(location => {
            this.store.dispatch(widgetsActions.pickLocation(location));
        })

        // react to settings changes
    }

    onSearch(query: string): void {
        this.store.dispatch(widgetsActions.searchLocation(query));
    }

    clearLocation() {
        this.store.dispatch(widgetsActions.pickLocation(null));
    }

    saveWidget() {
        this.store.dispatch(widgetsActions.saveWidget(this.widget?.id));
    }
}
