import { createFeatureSelector, Store } from '@ngrx/store';
import { weatherFeatureKey } from './home.reducer';
import { WeatherState } from './home.model';

class HomeSelectors {
   constructor(private stateSelector: (store: Store) => WeatherState) {
   }
}

const weatherFeatureSelector = createFeatureSelector<WeatherState>(weatherFeatureKey);
export const weatherSelector = new HomeSelectors(weatherFeatureSelector);
