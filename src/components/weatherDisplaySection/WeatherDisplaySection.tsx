import React from 'react';
import {WeatherDisplay} from "components/weatherDisplay/WeatherDisplay";
import {SideBar} from "components/SideBar";
import {useAppSelector} from "hooks/useAppSelector";

type WeatherDisplaySection = {
    isOpenSideBar: boolean
    toggleSideBar: () => void
    toggleTransitionsModal: () => void
}
export const WeatherDisplaySection = ({
                                          toggleTransitionsModal,
                                          toggleSideBar,
                                          isOpenSideBar
                                      }: WeatherDisplaySection) => {
    const weatherData = useAppSelector(state => state.weatherData);
    return (
        <section className="second-section">
            {
                weatherData.length ? <WeatherDisplay/> :
                    <h1 className='no-city-message'>You need to choose current city </h1>
            }

            <SideBar isOpenSideBar={isOpenSideBar}
                     changeSideBarStatus={toggleSideBar}
                     toggleTransitionsModal={toggleTransitionsModal}

            />
        </section>
    );
};
