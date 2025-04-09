import { WidgetsState } from './widgets.model';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { widgetsActions } from './widgets.actions';

export const weatherDetailsFeatureKey = 'weatherDetails';

const initialState: WidgetsState = {
    suggestedLocations: [],
}

const suggestedLocationsReducer = createReducer(initialState.suggestedLocations,
    on(widgetsActions.searchLocationSuccess, (state, action) => action.res),
    on(widgetsActions.searchLocationFailure, () => []),
);

export const widgetsReducer = combineReducers({
    suggestedLocations: suggestedLocationsReducer,
});
