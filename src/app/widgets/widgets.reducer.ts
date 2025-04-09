import { WidgetsState } from './widgets.model';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { widgetsActions } from './widgets.actions';

export const widgetsFeatureKey = 'widgets';

const initialState: WidgetsState = {
    suggestedLocations: [],
    selectedLocation: null,
}

const suggestedLocationsReducer = createReducer(initialState.suggestedLocations,
    on(widgetsActions.searchLocationSuccess, (state, action) => action.res),
    on(widgetsActions.searchLocationFailure, () => []),
);

const selectedLocationReducer = createReducer(initialState.selectedLocation,
    on(widgetsActions.pickLocation, (state, action) => action.location))

export const widgetsReducer = combineReducers({
    suggestedLocations: suggestedLocationsReducer,
    selectedLocation: selectedLocationReducer,
});
