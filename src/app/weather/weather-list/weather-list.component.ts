import { Component } from '@angular/core';
import { WeatherWidget } from '../weather.model';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    WeatherWidgetComponent,
  ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.scss'
})
export class WeatherListComponent {
  items: WeatherWidget[] = [
    { id: 1, locationName: "Saint-Petersburg" },
    { id: 2, locationName: "Moscow" },
    { id: 3, locationName: "New-York" },
    { id: 4, locationName: "London" },
    { id: 5, locationName: "Paris" },
  ];
}
