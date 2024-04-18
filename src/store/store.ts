import {AnyAction, combineReducers} from "redux";
import {weatherReducer} from "reducers/weather.reducer";
import {configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    weatherData: weatherReducer
})
export const store = configureStore({
    reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;