import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { provideState } from '@ngrx/store';
import { homeFeatureKey, homeReducer } from './home/home.reducer';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        providers: [
            provideState(homeFeatureKey, homeReducer),
        ],
    },
    {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.routes').then(c => c.widgetsRoutes),
    },
];
