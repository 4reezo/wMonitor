import { Component, Input } from '@angular/core';
import { SpeedUnits, Wind } from '../../../core/weather/weather.model';

@Component({
    selector: 'app-widget-wind',
    imports: [],
    templateUrl: './widget-wind.component.html',
    styleUrl: './widget-wind.component.scss',
})
export class WidgetWindComponent {
    @Input()
    wind?: Wind;
    @Input()
    speedUnits: SpeedUnits = 'm';

    get windDisplay() {
        if (!this.wind) {
            return null;
        }

        return this.wind[this.speedUnits];
    }
}
