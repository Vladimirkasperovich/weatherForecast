import React from 'react';
import './components-styles/WeatherDisplay.css'
import {ClockDisplay} from "components/ClockDisplay";

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
    let weatherImageSrc = '';
    switch (weatherDescription.toLowerCase()) {
        case 'clear sky':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Sun_Weather_Icon_PNG_Clip_Art-1517.png';
            break;
        case 'broken clouds':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Clouds_Weather_Icon_PNG_Clip_Art-1508.png';
            break;
        case 'overcast clouds':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Clouds_Weather_Icon_PNG_Clip_Art-1508.png';
            break;
        case 'thunderstorm':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Thundery_Showers_Weather_Icon_PNG_Clip_Art-1520.png';
            break;
        case 'light rain':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
            break;
        case 'moderate rain':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
            break;
        case 'heavy rain':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
            break;
        case 'light snow':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png';
            break
        case 'moderate snow':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Snowy_Cloud_Weather_Icon_PNG_Clip_Art-1503.png';
            break;
        case 'scattered clouds':
            weatherImageSrc = 'https://pics.clipartpng.com/thumbs/Snowy_Cloud_Weather_Icon_PNG_Clip_Art-1503.png';
            break;
        default:
            weatherImageSrc = '';
    }
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
                <img src={weatherImageSrc} alt={weatherDescription}/>
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

