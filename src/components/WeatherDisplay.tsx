import React from 'react';
import './components-styles/WeatherDisplay.css'
import {ClockDisplay} from "components/ClockDisplay";
import {WeatherImage} from "components/WeatherImage";
import SunWithClouds from "components/SunWithClouds";
import {Sun} from "components/Sun";
import RainCloud from "components/RainCloud";

export type WeatherDisplayPropsType = {
    responseCityName: string
    celsiusTemperature: number
    weatherDescription: string
    windSpeed: number
    windDeg: number
    pressure: number
    humidity: number
    sunrise: number
    sunset: number
}
export const WeatherDisplay = ({
                                   responseCityName,
                                   celsiusTemperature,
                                   weatherDescription,
                                   windSpeed,
                                   windDeg,
                                   humidity,
                                   sunrise,
                                   pressure,
                                   sunset
                               }: WeatherDisplayPropsType) => {


    return (
        <div className="second-section__items">
            <div className="city-name-temperature">
                <p className='city-name__item'>{responseCityName}</p>
                <p className='temperature__item'>{`${celsiusTemperature}`}&deg;</p>
            </div>
            <div>
                <ClockDisplay/>
            </div>
            <div>
                <WeatherImage weatherDescription={weatherDescription}/>
            </div>
            <p className="weather-description__item">{weatherDescription}</p>
            <div className="weather-info__items">
                <p className='weather-wind-speed__item'>Wind Speed: <span>{windSpeed}</span> m/s</p>
                <p className='weather-wind-deg__item'>Wind Direction: <span>{windDeg}</span>°</p>
                <p className='weather-pressure__item'>Pressure: <span>{pressure}</span> hPa</p>
                <p className='weather-humidity__item'>Humidity: <span>{humidity}</span>%</p>
                <p className='weather-sunrise__item'>Sunrise: <span>{new Date(sunrise * 1000).toLocaleTimeString()}</span>
                </p>
                <p className='weather-sunset__item'>Sunset: <span>{new Date(sunset * 1000).toLocaleTimeString()}</span>
                </p>
            </div>
        </div>
    );
};

