import React, {useEffect, useState} from 'react';
import {format} from "date-fns";

export const ClockDisplay = () => {
    const [time, setTime] = useState<string>('');
    const getCurrentTime = () => {
        const date = new Date();
        return format(date, 'HH:mm:ss')
    }
    useEffect(() => {

        const clockId = setInterval(() => {
            setTime(getCurrentTime())
        }, 1000);

        return () => clearInterval(clockId)
    }, []);


    return (
        <div>
            {time}
        </div>
    );
};
