import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { homeFeatureKey } from './home.reducer';
import { HomeState } from './home.model';

class HomeSelectors {
    selectWidgetList = createSelector(
        this.featureStateSelector,
        state => Object.values(state.widgetList),
    )

    constructor(private featureStateSelector: (store: Store) => HomeState) {
    }
}

const homeFeatureSelector = createFeatureSelector<HomeState>(homeFeatureKey);
export const homeSelectors = new HomeSelectors(homeFeatureSelector);
