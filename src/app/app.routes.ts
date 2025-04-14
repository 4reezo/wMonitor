import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { provideState } from '@ngrx/store';
import { homeFeatureKey, homeReducer } from './home/home.reducer';
import { provideEffects } from '@ngrx/effects';
import { HomeEffects } from './home/home.effects';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        providers: [
            provideState(homeFeatureKey, homeReducer),
            provideEffects(HomeEffects),
        ],
    },
    {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.routes').then(c => c.widgetsRoutes),
    },
];
