import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { appRouterActions } from './app-router.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppRouterEffects {
    actions$ = inject(Actions);
    router = inject(Router);

    go$ = createEffect(() => this.actions$.pipe(
        ofType(appRouterActions.go),
        map(action => {
            this.router.navigate(action.commands)
        }),
    ), { dispatch: false })
}
