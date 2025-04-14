import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { homeFeatureKey } from './home.reducer';
import { HomeState } from './home.model';

class HomeSelectors {
    selectWidgetDict = createSelector(
        this.featureStateSelector,
        state => state?.widgets,
    )

    selectWidgetList = createSelector(
        this.selectWidgetDict,
        widgets => widgets ? Object.values(widgets) : [],
    )

    constructor(private featureStateSelector: (store: Store) => HomeState) {
    }
}

const homeFeatureSelector = createFeatureSelector<HomeState>(homeFeatureKey);
export const homeSelectors = new HomeSelectors(homeFeatureSelector);
