import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpeedUnits, Wind } from '../../../core/weather/weather.model';

@Component({
    selector: 'app-widget-wind',
    imports: [],
    templateUrl: './widget-wind.component.html',
    styleUrl: './widget-wind.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWindComponent {
    @Input()
    wind?: Wind;
    @Input()
    selectedUnits: SpeedUnits = 'm';

    get speed() {
        if (!this.wind) {
            return null;
        }

        return Math.round(this.wind[this.selectedUnits][0]);
    }

    get degree() {
        if (!this.wind) {
            return null;
        }

        return this.wind[this.selectedUnits][1];
    }
}
