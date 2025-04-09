import { Component, Input } from '@angular/core';
import { TempUnits, WeatherTemp } from '../../../core/weather/weather.model';

@Component({
    selector: 'app-widget-temp',
    imports: [],
    templateUrl: './widget-temp.component.html',
    styleUrl: './widget-temp.component.scss',
})
export class WidgetTempComponent {
    @Input()
    temp?: WeatherTemp;

    @Input()
    selectedUnits: TempUnits = 'c';

    get tempDisplay() {
        if (!this.temp) {
            return null;
        }

        return [
            Math.round(this.temp[this.selectedUnits][0]),
            Math.round(this.temp[this.selectedUnits][1]),
            Math.round(this.temp[this.selectedUnits][2]),
        ];
    }

    get units() {
        return `${this.selectedUnits.toUpperCase()}&#176;`
    }
}
