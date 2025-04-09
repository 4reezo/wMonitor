import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { homeSelectors } from './home.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        WeatherWidgetComponent,
        AsyncPipe,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private store = inject(Store);

    widgetList$ = this.store.pipe(select(homeSelectors.selectWidgetList));

    constructor() {
        //this.widgetList$.subscribe(console.log);
    }
}
