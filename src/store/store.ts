import {AnyAction, combineReducers} from "redux";
import {weatherReducer} from "reducers/weather.reducer";
import {configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {loadingReducer} from "../reducers/loading.reducer";

export const rootReducer = combineReducers({
    weatherData: weatherReducer,
    loading: loadingReducer
})
export const store = configureStore({
    reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;