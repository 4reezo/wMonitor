import { WidgetsState } from './widgets.model';
import { weatherDetailsFeatureKey } from './widgets.reducer';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

class WidgetsSelectors {
    getSuggestedLocations = createSelector(
        this.featureStateSelector,
        state => state.suggestedLocations || [],
    );

    constructor(private featureStateSelector: (state: Store) => WidgetsState) {
    }
}

const featureStateSelector = createFeatureSelector<WidgetsState>(weatherDetailsFeatureKey);
export const weatherDetailsSelectors = new WidgetsSelectors(featureStateSelector);
