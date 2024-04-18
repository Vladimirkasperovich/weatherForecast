import React, {useEffect} from 'react';
import 'App.css'
import {CountrySelect} from "components/CountrySelect";
import {BackDropLoader} from "components/BackDropLoader";
import {Header} from "components/Header";
import {HeaderPropsType} from "types/componentsTypes/HeaderPropsType";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {weatherThunk} from "reducers/weather.reducer";


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
        setWeatherData('minsk');
    }, []);


    console.log(weatherData)
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
                    <div className="second-section__items">
                        <span>9 &deg;</span>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
