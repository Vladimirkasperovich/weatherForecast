import React, { useState } from 'react';
import 'App.css'
import { CitySelect } from "components/CitySelect";
import { BackDropLoader } from "components/BackDropLoader";
import { Header } from "components/Header";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { WeatherDisplay } from "components/WeatherDisplay";
import { SideBar } from "components/SideBar";
import { TransitionsModal } from 'components/TransitionsModal';


function App() {
    const weatherData = useAppSelector(state => state.weatherData);
    const { setWeatherData } = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    


    const setCityName = (cityName: string) => {
        setWeatherData(cityName);
    }

    const toggleSideBar = () => {
        setIsOpen((prevState) => !prevState)
    }

    


    return (
        <div className="App">
            <Header title={'Current weather'}
                linkToGithub={'https://github.com/Vladimirkasperovich'}
                linkToLinkedin={'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/'}
                linkToFacebook={'https://www.facebook.com/vladimir.kasperovich.7'}
                changeSideBarStatus={toggleSideBar}
            />
            <main className='main'>
                <section className='first-section'>
                    <div className='first-section__items'>
                    <TransitionsModal/>
                        <CitySelect setCityName={setCityName} />
                    </div>
                </section>
                <section className="second-section">
                    {
                        weatherData.length ? <WeatherDisplay /> : <h1 className='no-city-message'>You need to choose current city </h1>
                    }
                  
                    <SideBar isOpen={isOpen} changeSideBarStatus={toggleSideBar} />
                </section>
            </main>
            <BackDropLoader />
        </div>
    );
}

export default App;

