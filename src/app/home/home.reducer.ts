import { HomeState } from './home.model';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { homeActions } from './home.actions';

export const homeFeatureKey = "home";

const initialState: HomeState = {
    widgetList: {},
}

const widgetListReducer = createReducer(initialState.widgetList,
    on(homeActions.insertWidget, (state, action) => {
        return { ...state, [action.widget.id]: action.widget };
    }),
);

export const homeReducer = combineReducers({
    widgetList: widgetListReducer,
});
