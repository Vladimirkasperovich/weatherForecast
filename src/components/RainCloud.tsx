import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const RainCloud = () => {
    const cloudAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 2000 }
    });

    const raindropAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000, delay: 500 }
    });

    return (
        <div style={{ position: 'relative', width: '256px', height: '256px' }}>
            <animated.div
                style={{
                    ...cloudAnimation,
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: '#ccc',
                    boxShadow: '0px 5px 15px 5px rgba(0, 0, 0, 0.3)'
                }}
            />
            <animated.div
                style={{
                    ...raindropAnimation,
                    position: 'absolute',
                    top: '50px',
                    left: '30px',
                    width: '2px',
                    height: '50px',
                    background: '#000',
                    transform: 'rotate(45deg)'
                }}
            />
            <animated.div
                style={{
                    ...raindropAnimation,
                    position: 'absolute',
                    top: '70px',
                    left: '40px',
                    width: '2px',
                    height: '50px',
                    background: '#000',
                    transform: 'rotate(45deg)'
                }}
            />
            {/* Добавьте другие капли дождя по аналогии */}
        </div>
    );
};

export default RainCloud;
