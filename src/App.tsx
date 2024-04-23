import React, {useState} from 'react';
import 'App.css'
import {CountrySelect} from "components/CountrySelect";
import {BackDropLoader} from "components/BackDropLoader";
import {Header} from "components/Header";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {WeatherDisplay} from "components/WeatherDisplay";
import {SideBar} from "components/SideBar";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {IconButtonWIthLink} from "components/IconButtonWIthLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {Footer} from "components/Footer";


function App() {
    const weatherData = useAppSelector(state => state.weatherData);
    const {setWeatherData} = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const headerProps = {
        title: 'Current weather',
        linkToGithub: 'https://github.com/Vladimirkasperovich',
        linkToLinkedin: 'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/',
        linkToFacebook: 'https://www.facebook.com/vladimir.kasperovich.7'
    }


    const setCityName = (cityName: string) => {
        setWeatherData(cityName);
    }

    const toggleSideBar = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="App">
            <Header title={headerProps.title}
                    linkToGithub={headerProps.linkToGithub}
                    linkToLinkedin={headerProps.linkToLinkedin}
                    linkToFacebook={headerProps.linkToFacebook}
                    changeSideBarStatus={toggleSideBar}
            />
            <main className='main'>
                <section className='first-section'>
                    <div className='first-section__items'>
                        <CountrySelect setCityName={setCityName}/>
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
                                                            sunset={weatherData.sys.sunset}
                        />
                    }
                    {
                        !weatherData.main && <h1 className='no-city-message'>You need to choose current city </h1>
                    }
                    <SideBar isOpen={isOpen} changeSideBarStatus={toggleSideBar}/>
                </section>
            </main>
            <Footer/>
            <BackDropLoader/>
        </div>
    );
}

export default App;
