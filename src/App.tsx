import React, {useEffect} from 'react';
import 'App.css'
import {CountrySelect} from "components/CountrySelect";
import {BackDropLoader} from "components/BackDropLoader";
import {Header} from "components/Header";
import {HeaderPropsType} from "types/componentsTypes/HeaderPropsType";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {WeatherDisplay} from "components/WeatherDisplay";



function App() {
    const weatherData = useAppSelector(state => state.weatherData);
    const {setWeatherData} = useAppDispatch();

    //don`t forget to leave this object in state)
    const headerProps: HeaderPropsType = {
        title: 'Current weather',
        linkToGithub: 'https://github.com/Vladimirkasperovich',
        linkToLinkedin: 'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/',
        linkToFacebook: 'https://www.facebook.com/vladimir.kasperovich.7'
    }

    useEffect(() => {
        //need to choose current city
        setWeatherData('minsk');
    }, []);

    return (
        <div className="App">
            <Header title={headerProps.title}
                    linkToGithub={headerProps.linkToGithub}
                    linkToLinkedin={headerProps.linkToLinkedin}
                    linkToFacebook={headerProps.linkToFacebook}
            />
            <main className='main'>
                <section className='first-section'>
                    <div className='first-section__items'>
                        <h1>Vladimir Kasperovich</h1>
                        <CountrySelect/>
                    </div>
                </section>
                <section className="second-section">
                    {
                        weatherData.main && <WeatherDisplay responseCityName={weatherData.name}
                                                            celsiusTemperature={Math.round(weatherData.main.temp - 273.15)}
                                                            weatherDescription={weatherData.weather[0].description}
                                                            windSpeed={weatherData.wind.speed}
                                                            windDeg={weatherData.wind.deg}
                                                            pressure={weatherData.main.pressure}
                                                            humidity={weatherData.main.humidity}
                                                            sunrise={weatherData.sys.sunrise}
                                                            sunSet={weatherData.sys.sunset}
                        />
                    }
                </section>
            </main>
            <BackDropLoader/>
        </div>
    );
}

export default App;
