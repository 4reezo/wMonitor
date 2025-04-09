import { WidgetsState } from './widgets.model';
import { widgetsFeatureKey } from './widgets.reducer';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

class WidgetsSelectors {
    getSuggestedLocations = createSelector(
        this.featureStateSelector,
        state => state.suggestedLocations || [],
    );

    getSelectedLocation = createSelector(
        this.featureStateSelector,
        state => state.selectedLocation,
    );

    getWeatherPreview = createSelector(
        this.featureStateSelector,
        state => state.weatherPreview,
    );

    constructor(private featureStateSelector: (state: Store) => WidgetsState) {
    }
}

const featureStateSelector = createFeatureSelector<WidgetsState>(widgetsFeatureKey);
export const widgetsSelectors = new WidgetsSelectors(featureStateSelector);
