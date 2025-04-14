import { Routes } from '@angular/router';
import { WidgetsComponent } from './widgets.component';
import { WidgetsEffects } from './widgets.effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { widgetsFeatureKey, widgetsReducer } from './widgets.reducer';

export const widgetsRoutes: Routes = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    {
        path: ':id',
        component: WidgetsComponent,
        providers: [
            provideEffects(WidgetsEffects),
            provideState(widgetsFeatureKey, widgetsReducer),
        ],
    },
]
