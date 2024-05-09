import React from 'react';
import {CitySelect} from "components/CitySelect";

type CitySelectSection = {
    setCityName: (cityName: string) => void

}

export const CitySelectSection = ({setCityName}: CitySelectSection) => {
    return (
        <section className='first-section'>
            <div className='first-section__items'>

                <CitySelect setCityName={setCityName}/>
            </div>
        </section>
    );
};

