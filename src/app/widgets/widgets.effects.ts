import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { widgetsActions } from './widgets.actions';
import { GeoService } from '../core/geo/geo.service';
import { catchError, EMPTY, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { widgetsSelectors } from './widgets.selectors';
import { select, Store } from '@ngrx/store';
import { homeActions } from '../home/home.actions';
import { Guid } from 'js-guid';
import { appRouterActions } from '../core/app-router/app-router.actions';
import { WeatherService } from '../core/weather/weather.service';
import { weatherActions } from '../core/weather/weather.actions';

@Injectable()
export class WidgetsEffects {
    private correlationContext = 'weather-preview';

    actions$ = inject(Actions);
    geoService = inject(GeoService);
    weatherService = inject(WeatherService)
    store = inject(Store);

    searchLocation$ = createEffect(() => this.actions$.pipe(
        ofType(widgetsActions.searchLocation),
        switchMap(action => this.geoService.getLocationByName(action.query).pipe(
            map(res => widgetsActions.searchLocationSuccess(res)),
            catchError(err => of(err)),
        )),
    ));

    saveWidget$ = createEffect(() => this.actions$.pipe(
        ofType(widgetsActions.saveWidget),
        withLatestFrom(this.store.pipe(select(widgetsSelectors.getWidgetPreview))),
        switchMap(([ action, widget ]) => {
            if (!widget) {
                return EMPTY;
            }

            return of(
                homeActions.insertWidget({
                    ...widget,
                    id: action.id === 'new' ? Guid.newGuid().toString() : action.id,
                }),
                appRouterActions.go([ '/' ]),
                widgetsActions.clearPreview());
        }),
    ));

    getWeatherPreview$ = createEffect(() => this.actions$.pipe(
        ofType(widgetsActions.pickLocation),
        map(action => {
            return action.location ? weatherActions.getWeather(action.location.coords, this.correlationContext) : widgetsActions.clearPreview()
        }),
    ));

    getWeatherPreviewSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(weatherActions.getWeatherSuccess),
        filter(action => action.context === this.correlationContext),
        map(action => widgetsActions.gotWeatherPreview(action.weather)),
    ))
}
