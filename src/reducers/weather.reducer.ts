import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherDataType} from "types/weatherDataType/WeatherDataType";
import {weatherService} from "services/weatherService";
import {loadingActions} from "./loading.reducer";
import { log } from "console";
import { WeatherDataResponseType } from "types/weaterDataResponseType/WeatherDataResponseType";

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
    initialState: [] as WeatherDataResponseType[] ,
    name: 'weather',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setWeatherData.fulfilled, (state, action: PayloadAction<WeatherDataType>) => {
            const responseData = [{
                responseCityName: action.payload.name,
                celsiusTemperature: Math.round(action.payload.main.temp - 273.15),
                weatherDescription: action.payload.weather[0].description,
                windSpeed: action.payload.wind.speed,
                windDeg: action.payload.wind.deg,
                pressure: action.payload.main.pressure,
                humidity: action.payload.main.humidity,
                sunrise: action.payload.sys.sunrise,
                sunset: action.payload.sys.sunset
            }];
            
            return responseData;
        })
    }
})




export const weatherReducer = slice.reducer;
export const weatherThunk = {setWeatherData}
