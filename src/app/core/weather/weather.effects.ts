import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { weatherActions } from './weather.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { WeatherService } from './weather.service';

@Injectable()
export class WeatherEffects {
    private actions$ = inject(Actions);
    private weatherService = inject(WeatherService);

    getWeather$ = createEffect(() => this.actions$.pipe(
        ofType(weatherActions.getWeather),
        switchMap(action => this.weatherService.getWeatherByCoords(action.coords).pipe(
            map(res => weatherActions.getWeatherSuccess(res, action.context)),
            catchError((err: Error) => of(weatherActions.getWeatherFailure(err))),
        )),
    ))
}
