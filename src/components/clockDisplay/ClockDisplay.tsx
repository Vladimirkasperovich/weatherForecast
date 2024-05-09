import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import 'components/clockDisplay/clockDisplay.css';

export const ClockDisplay = () => {
    const [time, setTime] = useState<string>('');

    const getCurrentTime = () => {
        const date = new Date();
        return format(date, 'HH:mm:ss');
    };

    useEffect(() => {
        const clockId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(clockId);
    }, []);

    return (
        <div className="clock-container">
            <div className="clock">{time}</div>
        </div>
    );
};
