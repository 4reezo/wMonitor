import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherWidget } from './weather-widget.model';
import { WidgetGeneralComponent } from './widget-general/widget-general.component';
import { WidgetTempComponent } from './widget-temp/widget-temp.component';
import { WidgetWindComponent } from './widget-wind/widget-wind.component';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-weather-widget',
    standalone: true,
    imports: [
        WidgetGeneralComponent,
        WidgetTempComponent,
        WidgetWindComponent,
        RouterLink,
        DatePipe,
    ],
    templateUrl: './weather-widget.component.html',
    styleUrl: './weather-widget.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetComponent {
    @Input()
    widget?: WeatherWidget;
    @Input()
    isPreview: boolean = false;

    @Output()
    remove = new EventEmitter<string>();
    @Output()
    update = new EventEmitter<string>();
}
