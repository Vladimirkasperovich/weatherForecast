import {api} from "services/api";
import {WeatherDataType} from "types/weatherDataType/WeatherDataType";



export const weatherService = {
    getWeather(cityName: string) {
        const API_KEY = '15c9a33acfa3d9f1a6a03e80b65d6dcd';
        return api.get<WeatherDataType>(`/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    }
}