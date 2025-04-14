import { HomeState } from './home.model';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { homeActions } from './home.actions';

export const homeFeatureKey = "home";

const initialState: HomeState = {
    widgets: {},
}

const widgetsReducer = createReducer(initialState.widgets,
    on(homeActions.insertWidget, (state, action) => {
        return { ...state, [action.widget.id]: action.widget };
    }),
    on(homeActions.removeWidget, (state, action) => {
        const newState = { ...state };
        delete newState[action.id];

        return newState;
    }),
    on(homeActions.updateWeatherSuccess, (state, action) => {
        const updatedWidget = { ...state[action.id], weather: action.weather };

        return { ...state, [action.id]: updatedWidget };
    }),
);

export const homeReducer = combineReducers({
    widgets: widgetsReducer,
});
