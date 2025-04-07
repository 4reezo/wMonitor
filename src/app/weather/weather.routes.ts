import { Routes } from '@angular/router';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

export const weatherRoutes: Routes = [
    { path: '', component: WeatherListComponent },
    { path: ':id', component: WeatherDetailsComponent },
]
