import { Routes } from '@angular/router';
import { WidgetsComponent } from './widgets.component';

export const widgetsRoutes: Routes = [
    { path: '', redirectTo: 'new' },
    {
        path: ':id',
        component: WidgetsComponent,
        data: { isAdding: true },
        providers: [
            // provideEffects(WeatherDetailsEffects),
            // provideState(weatherDetailsFeatureKey, weatherDetailsReducer),
        ],
    },
]
