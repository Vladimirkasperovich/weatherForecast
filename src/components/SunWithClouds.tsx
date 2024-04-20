import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SunWithClouds = () => {
    const cloudAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(200px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 3000 },
    });
    const sunAnimations = useSpring({
        from: { rotate: 0 },
        to: { rotate: 360 },
        config: { duration: 5000, loop: true },
    });
    const calculateRayPosition = (index: number, raysCount: number, radius: number) => {
        const angle = (360 / raysCount) * index;
        const radians = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
        return { x, y };
    };

    const raysCount = 12;
    const sunRadius = 60;

    return (
        <div style={{ display: "flex", justifyContent: 'center', marginTop: '20px', marginBlock: '20px'}}>
            <div className="sun-with-clouds">
                <animated.div
                    className="sun-body"
                    style={{
                        width: `${sunRadius * 2}px`,
                        height: `${sunRadius * 2}px`,
                        borderRadius: '50%',
                        marginBottom: '-40px',
                        marginLeft: '30px',
                        background: 'radial-gradient(circle at 50% 50%, #FFEC80, #FFBF00)',
                        transform: sunAnimations.rotate.interpolate((rotate) => `rotate(${rotate}deg)`),
                    }}
                >
                    {/* Rays */}
                    {[...Array(raysCount)].map((_, index) => {
                        const rayPosition = calculateRayPosition(index, raysCount, sunRadius);
                        return (
                            <animated.div
                                key={index}
                                className="sun-ray"
                                style={{
                                    position: 'absolute',
                                    top: `calc(100% - ${sunRadius}px)`, // Расстояние лучей от верхней границы солнца
                                    left: `calc(100% - ${sunRadius}px)`, // Расстояние лучей от левой границы солнца
                                    width: '2px',
                                    height: '30px',
                                    background: 'radial-gradient(circle at 50% 50%, #FFEC80, #FFBF00)',
                                    transform: `translate(${rayPosition.x}px, ${rayPosition.y}px) rotate(${index * (360 / raysCount)}deg)`,
                                    transformOrigin: 'top',
                                }}
                            />
                        );
                    })}
                </animated.div>


                {/* Анимированное облако */}
                <animated.div
                    className="cloud"
                    style={{
                        width: '200px',
                        height: '70px',
                        background: 'linear-gradient(to right, #FFFFFF, #F0F0F0)',
                        // position: 'relative',
                        borderRadius: '20px',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        ...cloudAnimation,
                    }}
                />
            </div>
        </div>
    );
};

export default SunWithClouds;
