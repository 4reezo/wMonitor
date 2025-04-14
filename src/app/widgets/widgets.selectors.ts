import { WidgetsState } from './widgets.model';
import { widgetsFeatureKey } from './widgets.reducer';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';
import { getRouterSelectors } from '@ngrx/router-store';
import { Params } from '@angular/router';
import { HomeState } from '../home/home.model';
import { homeSelectors } from '../home/home.selectors';

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

    getSettingsPreview = createSelector(
        this.featureStateSelector,
        state => state.settingsPreview,
    );

    getWidgetPreview = createSelector(
        this.getSelectedLocation,
        this.getWeatherPreview,
        this.getSettingsPreview,
        (location, weatherPreview, settingsPreview) => (
            location && weatherPreview && settingsPreview ? {
                id: 'new',
                location: location,
                settings: settingsPreview,
                weather: weatherPreview,
            } as WeatherWidget : null
        ),
    );

    getEditId = createSelector(
        this.routeParamsSelector,
        (params) => params?.['id'] || null,
    );

    getEditWidget = createSelector(
        this.widgetsSelector,
        this.getEditId,
        (widgets, id) => {
            if (!id || !widgets) {
                return null;
            }

            return widgets[id] || null;
        },
    );

    constructor(
        private featureStateSelector: (state: Store) => WidgetsState,
        private routeParamsSelector: (state: Store) => Params,
        private widgetsSelector: (state: Store) => Record<string, WeatherWidget>,
    ) {
    }
}

const featureStateSelector = createFeatureSelector<WidgetsState>(widgetsFeatureKey);
export const widgetsSelectors = new WidgetsSelectors(
    featureStateSelector,
    getRouterSelectors().selectRouteParams,
    homeSelectors.selectWidgetDict,
);
