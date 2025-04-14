import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TempUnits, WeatherTemp } from '../../../core/weather/weather.model';

@Component({
    selector: 'app-widget-temp',
    imports: [],
    templateUrl: './widget-temp.component.html',
    styleUrl: './widget-temp.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
            this.roundAndSign(this.temp[this.selectedUnits][0]),
            this.roundAndSign(this.temp[this.selectedUnits][1]),
            this.roundAndSign(this.temp[this.selectedUnits][2]),
        ];
    }

    get units() {
        return `${this.selectedUnits.toUpperCase()}&#176;`
    }

    private roundAndSign(temp: number): string {
        const res = Math.round(temp);

        if (res === 0) {
            return res.toString(10);
        }

        return (res < 0 ? '-' : '+') + res.toString(10);
    }
}
