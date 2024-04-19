import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SunWithClouds = () => {
    const sunStyle = useSpring({
        from: { rotate: 0, scale: 1 },
        to: { rotate: 360, scale: 1.1 },
        loop: { reverse: true },
        config: { duration: 5000 },
    });

    const rayStyles = Array.from({ length: 12 }).map((_, index) => ({
        transform: `rotate(${index * 30}deg) translateY(-50px)`,
    }));

    return (
        <div className="sun-with-clouds">
            <animated.div
                className="sun"
                style={{
                    ...sunStyle,
                    borderRadius: '50%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle at 50% 50%, #FFEC80, #FFBF00)',
                    position: 'relative',
                }}
            >
                {rayStyles.map((style, index) => (
                    <animated.div
                        key={index}
                        className="sun-ray"
                        style={{
                            ...style,
                            width: '4px',
                            height: '60px',
                            background: 'yellow',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transformOrigin: 'top',
                        }}
                    />
                ))}
            </animated.div>
            <animated.div
                className="cloud"
                style={{
                    width: '400px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
            />
        </div>
    );
};

export default SunWithClouds;
