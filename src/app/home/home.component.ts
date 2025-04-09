import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        WeatherWidgetComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private store = inject(Store);

    items: WeatherWidget[] = [
        // { id: 1, locationName: "Saint-Petersburg" },
        // { id: 2, locationName: "Moscow" },
        // { id: 3, locationName: "New-York" },
        // { id: 4, locationName: "London" },
        // { id: 5, locationName: "Paris" },
    ];

    addWidget() {
        console.log("add clicked!");
        //this.store.dispatch(weatherActions.addWidget());
    }
}
