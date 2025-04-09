import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { widgetsActions } from './widgets.actions';
import { GeoApiService } from '../core/geo-api/geo-api.service';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class WidgetsEffects {
    actions$ = inject(Actions);
    geoService = inject(GeoApiService);

    searchLocation$ = createEffect(() => this.actions$.pipe(
        ofType(widgetsActions.searchLocation),
        switchMap(action => this.geoService.searchByName(action.query).pipe(
            map(res => widgetsActions.searchLocationSuccess(res)),
            catchError(err => of(err))
        ))
    ));
}
