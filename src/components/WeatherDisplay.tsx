import React from 'react';
import './components-styles/WeatherDisplay.css'
import { ClockDisplay } from "components/ClockDisplay";
import { WeatherImage } from "components/WeatherImage";
import { useAppSelector } from 'hooks/useAppSelector';


export const WeatherDisplay = () => {
    const weatherResponseData = useAppSelector(state => state.weatherData)
   
    return (
        <div className="second-section__items">
          {
            weatherResponseData && (
              <div className="weather-data">
                { weatherResponseData.map((data, index) => (
                  <div key={index} className="weather-data-item">
                    <div className="city-name-temperature">
                      <p className='city-name__item'>{data.responseCityName}</p>
                      <p className='temperature__item'>{`${data.celsiusTemperature}`}&deg;</p>
                    </div>
                    <div>
                      <ClockDisplay />
                    </div>
                    <div>
                      <WeatherImage weatherDescription={data.weatherDescription} />
                    </div>
                    <p className="weather-description__item">{data.weatherDescription}</p>
                    <div className="weather-info__items">
                      <p className='weather-wind-speed__item'>Wind Speed: <span>{data.windSpeed}</span> m/s</p>
                      <p className='weather-wind-deg__item'>Wind Direction: <span>{data.windDeg}</span>°</p>
                      <p className='weather-pressure__item'>Pressure: <span>{data.pressure}</span> hPa</p>
                      <p className='weather-humidity__item'>Humidity: <span>{data.humidity}</span>%</p>
                      <p className='weather-sunrise__item'>Sunrise: <span>{new Date(data.sunrise * 1000).toLocaleTimeString()}</span></p>
                      <p className='weather-sunset__item'>Sunset: <span>{new Date(data.sunset * 1000).toLocaleTimeString()}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        </div>
    );
};
