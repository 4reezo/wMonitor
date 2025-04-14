import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { homeSelectors } from './home.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { homeActions } from './home.actions';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        WeatherWidgetComponent,
        AsyncPipe,
        RouterLink,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    private store = inject(Store);

    widgetList$ = this.store.pipe(select(homeSelectors.selectWidgetList));

    onRemoveWidget(id: string) {
        this.store.dispatch(homeActions.removeWidget(id));
    }

    onUpdateWidget(id: string) {
        this.store.dispatch(homeActions.updateWeather(id));
    }


}
