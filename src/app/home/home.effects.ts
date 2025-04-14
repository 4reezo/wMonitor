import { inject, Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { homeActions } from './home.actions';
import { filter, map, merge, Subject, switchMap, take, takeUntil, tap, withLatestFrom } from 'rxjs';
import { weatherActions } from '../core/weather/weather.actions';
import { homeSelectors } from './home.selectors';
import { select, Store } from '@ngrx/store';

@Injectable()
export class HomeEffects implements OnDestroy {
    private actions$ = inject(Actions);
    private store = inject(Store);
    private destroySubj = new Subject<void>();

    updateWeather$ = createEffect(() => this.actions$.pipe(
        ofType(homeActions.updateWeather),
        withLatestFrom(this.store.pipe(select(homeSelectors.selectWidgetDict))),
        switchMap(([ action, widgets ]) => {
            const coords = widgets?.[action.id].location.coords;
            this.store.dispatch(weatherActions.getWeather(coords, action.id));

            // tricky part: to track only result with needed id, we are expecting a success action
            // filtered using our id
            // BUT: we should consider unsubscribing in case of errors or service destroy
            // though i'm sure there is a better alternative
            return this.actions$.pipe(
                ofType(weatherActions.getWeatherSuccess),
                filter(weatherAction => weatherAction.context === action.id),
                take(1),
                map(action => homeActions.updateWeatherSuccess(action.context, action.weather)),
                takeUntil(merge(
                        this.actions$.pipe(ofType(weatherActions.getWeatherFailure)),
                        this.destroySubj.asObservable(),
                    ).pipe(tap(console.log)),
                ),
            )
        }),
    ));

    ngOnDestroy(): void {
        this.destroySubj.next();
    }
}
