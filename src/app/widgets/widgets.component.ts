import { Component, inject, OnInit } from '@angular/core';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { LocationPickerComponent } from '../shared/location-picker/location-picker.component';
import { widgetsActions } from './widgets.actions';
import { weatherDetailsSelectors } from './widgets.selectors';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';

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
export class WidgetsComponent implements OnInit {
    store = inject(Store);
    fb = inject(FormBuilder);

    form = this.fb.group({
        location: [ null ],
        settings: this.fb.group({
            tempUnits: 'C',
        }),
    });

    suggestedLocations$ = this.store.pipe(select(weatherDetailsSelectors.getSuggestedLocations));

    widget?: WeatherWidget = undefined;

    ngOnInit(): void {
        // react to location changes
        this.form.controls.location.valueChanges.pipe()

        // react to settings changes
    }

    onSearch(query: string): void {
        this.store.dispatch(widgetsActions.searchLocation(query));
    }
}
