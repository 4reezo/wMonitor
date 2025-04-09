import { Component, Input } from '@angular/core';
import { WeatherWidget } from './weather-widget.model';
import { WidgetGeneralComponent } from './widget-general/widget-general.component';
import { WidgetTempComponent } from './widget-temp/widget-temp.component';
import { WidgetWindComponent } from './widget-wind/widget-wind.component';

@Component({
    selector: 'app-weather-widget',
    standalone: true,
    imports: [
        WidgetGeneralComponent,
        WidgetTempComponent,
        WidgetWindComponent,
    ],
    templateUrl: './weather-widget.component.html',
    styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent {
    @Input()
    widget?: WeatherWidget;
}
