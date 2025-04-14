import { WidgetsState } from './widgets.model';
import { widgetsFeatureKey } from './widgets.reducer';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { WeatherWidget } from '../shared/weather-widget/weather-widget.model';

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

    constructor(private featureStateSelector: (state: Store) => WidgetsState) {
    }
}

const featureStateSelector = createFeatureSelector<WidgetsState>(widgetsFeatureKey);
export const widgetsSelectors = new WidgetsSelectors(featureStateSelector);
