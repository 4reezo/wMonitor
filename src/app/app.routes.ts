import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'weather', loadChildren: () => import('./weather/weather.routes').then(c => c.weatherRoutes) },
];
