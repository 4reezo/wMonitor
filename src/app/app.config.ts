import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AppRouterEffects } from './core/app-router/app-router.effects';
import { WeatherEffects } from './core/weather/weather.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({
            router: routerReducer,
        }),
        provideStoreDevtools(),
        provideRouterStore(),
        provideHttpClient(),
        provideEffects(
            AppRouterEffects,
            WeatherEffects,
        ),
    ],
};
