import React, {useState} from 'react';
import {CitySelectSection} from "components/citySelectSection/CitySelectSection";
import {WeatherDisplaySection} from "components/weatherDisplaySection/WeatherDisplaySection";
import {TransitionsModal} from "components/TransitionsModal";
import {useAppDispatch} from "hooks/useAppDispatch";
import {SideBar} from "components/SideBar";

export const AppContainer = () => {
    const {setWeatherData} = useAppDispatch();
    const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
    const [isOpenTransitionsModal, setIsOpenTransitionsSideBar] = useState<boolean>(false);
    const setCityName = (cityName: string) => {
        setWeatherData(cityName);
    }

    const toggleSideBar = () => {
        setIsOpenSideBar((prevState) => !prevState)
    }

    const toggleTransitionsModal = () => {
        setIsOpenTransitionsSideBar((prevState) => !prevState);
    }
    return (
        <>
            <CitySelectSection setCityName={setCityName}/>
            <WeatherDisplaySection toggleTransitionsModal={toggleTransitionsModal} toggleSideBar={toggleSideBar}
                                   isOpenSideBar={isOpenSideBar}/>
            {/*<SideBar isOpenSideBar={isOpenSideBar}*/}
            {/*         changeSideBarStatus={toggleSideBar}*/}
            {/*         toggleTransitionsModal={toggleTransitionsModal}*/}

            {/*/>*/}
            <TransitionsModal toggleTransitionsModal={toggleTransitionsModal}
                              isOpenTransitionsModal={isOpenTransitionsModal}
            />
        </>
    );
};

