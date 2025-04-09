import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-widget-general',
    imports: [],
    templateUrl: './widget-general.component.html',
    styleUrl: './widget-general.component.scss',
})
export class WidgetGeneralComponent {
    @Input()
    caption?: string;
    @Input()
    iconCode?: string;
    @Input()
    description?: string;

    get imagePath() {
        return `https://openweathermap.org/img/wn/${this.iconCode}@2x.png`;
    }
}
