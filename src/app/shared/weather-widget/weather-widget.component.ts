import { Component, Input } from '@angular/core';
import { WeatherWidget } from './weather-widget.model';

@Component({
    selector: 'app-weather-widget',
    standalone: true,
    imports: [],
    templateUrl: './weather-widget.component.html',
    styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent {
    @Input()
    widget?: WeatherWidget;
}
