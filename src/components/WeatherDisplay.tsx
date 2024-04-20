import React from 'react';
import './components-styles/WeatherDisplay.css'
export type WeatherDisplayPropsType = {
    responseCityName: string
    celsiusTemperature: number
    weatherDescription: string
    windSpeed:number
    windDeg: number
    pressure: number
    humidity: number
    sunrise: number
    sunSet: number
}
export const WeatherDisplay = ({responseCityName, celsiusTemperature, weatherDescription}: WeatherDisplayPropsType) => {
    return (
        <div className="second-section__items">

            <div className="city-name-temperature">
                <p className='city-name__item'>{responseCityName}</p>
                <p className='temperature__item'>{`${celsiusTemperature}`}&deg;</p>
            </div>
            <img src='https://pics.clipartpng.com/thumbs/Sun_Weather_Icon_PNG_Clip_Art-1517.png'
                 alt='sun'/>
            {/*<img src="https://pics.clipartpng.com/thumbs/Cloud_and_Sun_Weather_Icon_PNG_Clip_Art-1516.png" alt='sun and cloud'/>*/}
            {/*<img src='https://pics.clipartpng.com/thumbs/Rain_Cloud_Weather_Icon_PNG_Clip_Art-1521.png' alt='cloud and rain'/>*/}
            {/*<img src="https://pics.clipartpng.com/thumbs/Thundery_Showers_Weather_Icon_PNG_Clip_Art-1520.png" alt='storm'/>*/}
            {/*<img src="https://pics.clipartpng.com/thumbs/Snowy_Cloud_Weather_Icon_PNG_Clip_Art-1503.png" alt="snows"/>*/}

            <p className='weather-description__item'>{weatherDescription}</p>

        </div>
    );
};

