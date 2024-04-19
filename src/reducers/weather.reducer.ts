import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherDataType} from "types/weatherDataType/WeatherDataType";
import {weatherService} from "services/weatherService";
import {loadingActions} from "./loading.reducer";

const setWeatherData = createAsyncThunk<WeatherDataType, string>(
    'weather/data',
    async (cityName: string, {rejectWithValue, dispatch}) => {
        dispatch(loadingActions.changeLoading(true))
        try {
            const response = await weatherService.getWeather(cityName);
            dispatch(loadingActions.changeLoading(false))
            return response.data;
        } catch (error: any) {
            return rejectWithValue(null)
        }


    }
)

const slice = createSlice({
    initialState: {} as WeatherDataType,
    name: 'weather',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setWeatherData.fulfilled, (state, action: PayloadAction<WeatherDataType>) => {
            return action.payload
        })
    }
})

export const weatherReducer = slice.reducer;
export const weatherThunk = {setWeatherData}