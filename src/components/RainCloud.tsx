import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const RainCloud = () => {
    const cloudAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 2000 }
    });

    const rainCount = 12;

    return (
        <div style={{ position: 'relative', width: '256px', height: '256px' }}>
            {/* sun */}
            <animated.div
                style={{
                    ...cloudAnimation,
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 50% 50%, #FFEC80, #FFBF00)',
                    boxShadow: '0px 5px 15px 5px rgba(0, 0, 0, 0.3)'
                }}
            />
            {/* cloud */}
            <animated.div
                style={{
                    ...cloudAnimation,
                    width: '200px',
                    height: '60px',
                    borderRadius: '30%',
                    marginTop: '-15%',
                    background: 'rgb(70, 130, 180)',
                    position: 'absolute'
                }}
            >
                {/* rain */}
                {
                    [...Array(rainCount)].map((rain, index) => (
                        <animated.div
                            key={index}
                            style={{
                                background: 'blue',
                                width: '10px',
                                height: '10px',
                                margin: '0 5px',
                                borderRadius: '10% 90% 50% 50%',
                                position: 'absolute',
                                bottom: '10',
                                transform: `translateX(${Math.random() * 100}px) translateY(${Math.random() * 100}px)`,
                                animation: 'falling-rain 2s linear infinite'
                            }}
                        />
                    ))
                }
            </animated.div>
        </div>
    );
};

export default RainCloud;
