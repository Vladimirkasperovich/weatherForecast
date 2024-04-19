import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SunWithClouds = () => {
    // Анимация для облака
    const cloudAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    // Анимация для солнца
    const sunAnimation = useSpring({
        from: { rotate: 0 },
        to: { rotate: 360 },
        config: { duration: 5000, loop: true },
    });

    // Стили для лучей солнца
    const rayStyles = Array.from({ length: 12 }).map((_, index) => ({
        transform: `rotate(${index * 30}deg) translateY(-50px)`,
    }));

    return (
        <div style={{ display: "flex", justifyContent: 'center', marginTop: '20px', marginBlock: '20px'}}>
            <div className="sun-with-clouds">
                {/* Анимированное солнце */}
                <animated.div
                    className="sun"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 50% 50%, #FFEC80, #FFBF00)',
                        // position: 'relative',
                        marginBottom: '-50px', // Поднять солнце на высоту облака
                        transform: sunAnimation.rotate.interpolate((rotate) => `rotate(${rotate}deg)`),
                    }}
                >
                    {/* Лучи солнца */}
                    {rayStyles.map((style, index) => (
                        <animated.div
                            key={index}
                            className="sun-ray"
                            style={{
                                ...style,
                                width: '4px',
                                height: '30px',
                                background: 'yellow',
                                // position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transformOrigin: 'top',
                            }}
                        />
                    ))}
                </animated.div>

                {/* Анимированное облако */}
                <animated.div
                    className="cloud"
                    style={{
                        width: '200px',
                        height: '100px',
                        background: 'rgba(255, 255, 255, 0.8)',
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
