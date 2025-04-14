import { WidgetsState } from './widgets.model';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { widgetsActions } from './widgets.actions';

export const widgetsFeatureKey = 'widgets';

const initialState: WidgetsState = {
    suggestedLocations: [],
    selectedLocation: null,
    weatherPreview: null,
    settingsPreview: null,
}

const suggestedLocationsReducer = createReducer(initialState.suggestedLocations,
    on(widgetsActions.searchLocationSuccess, (state, action) => action.res),
    on(widgetsActions.searchLocationFailure, () => []),
);

const selectedLocationReducer = createReducer(initialState.selectedLocation,
    on(widgetsActions.pickLocation, (state, action) => action.location),
);

const weatherPreviewReducer = createReducer(initialState.weatherPreview,
    on(widgetsActions.gotWeatherPreview, (state, action) => action.weather),
    on(widgetsActions.clearWeatherPreview, () => null),
);

const settingsPreviewReducer = createReducer(initialState.settingsPreview,
    on(widgetsActions.pickSettings, (state, action) => action.settings),
    on(widgetsActions.clearWeatherPreview, () => null),
);

export const widgetsReducer = combineReducers({
    suggestedLocations: suggestedLocationsReducer,
    selectedLocation: selectedLocationReducer,
    weatherPreview: weatherPreviewReducer,
    settingsPreview: settingsPreviewReducer,
});
