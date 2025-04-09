import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { widgetsActions } from './widgets.actions';
import { GeoService } from '../core/geo/geo.service';
import { catchError, EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { widgetsSelectors } from './widgets.selectors';
import { select, Store } from '@ngrx/store';
import { homeActions } from '../home/home.actions';
import { Guid } from 'js-guid';
import { appRouterActions } from '../core/app-router/app-router.actions';

@Injectable()
export class WidgetsEffects {
    actions$ = inject(Actions);
    geoService = inject(GeoService);
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
        withLatestFrom(this.store.pipe(select(widgetsSelectors.getSelectedLocation))),
        switchMap(([ action, location ]) => {
            if (!location) {
                return EMPTY;
            }

            return of(
                homeActions.insertWidget({
                    id: action.id || Guid.newGuid().toString(),
                    location: location,
                    settings: { tempUnits: 'C', showTime: true },
                    weather: {},
                }),
                appRouterActions.go([ '/' ]));
        }),
    ))
}
