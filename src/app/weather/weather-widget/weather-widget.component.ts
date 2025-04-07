import { Component, input } from '@angular/core';
import { WeatherWidget } from '../weather.model';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss'
})
export class WeatherWidgetComponent {
  widget = input.required<WeatherWidget>();
}
