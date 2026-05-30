import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [trail, setTrail] = useState([]);
    const rafId = useRef(null);
    const lastTrailTime = useRef(0);

    useEffect(() => {
        let animationId;

        const handleMouseMove = (e) => {
            // Use requestAnimationFrame for smooth updates
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            rafId.current = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });

                // Throttle trail creation (only every 40ms for smoother rainbow)
                const now = Date.now();
                if (now - lastTrailTime.current > 40) {
                    lastTrailTime.current = now;
                    setTrail(prev => {
                        const newTrail = [...prev, {
                            x: e.clientX,
                            y: e.clientY,
                            id: now
                        }];
                        // Keep last 12 positions for fuller rainbow effect
                        return newTrail.slice(-12);
                    });
                }
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.classList.contains('hover') ||
                target.closest('a') ||
                target.closest('button');
            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    // Clean up trail points automatically
    useEffect(() => {
        if (trail.length > 0) {
            const timer = setTimeout(() => {
                setTrail(prev => prev.slice(1));
            }, 200); // Changed from 100ms to 200ms for longer visibility
            return () => clearTimeout(timer);
        }
    }, [trail]);

    // Rainbow colors for trail
    const rainbowColors = [
        '#ff006e', // Pink
        '#fb5607', // Orange
        '#ffbe0b', // Yellow
        '#06ffa5', // Mint
        '#3a86ff', // Blue
        '#8338ec', // Purple
        '#ff006e', // Pink (loop)
    ];

    return (
        <>
            {/* Trail effect */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className={styles.trail}
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        opacity: (index / trail.length) * 0.8,
                        transform: `translate(-50%, -50%) scale(${0.4 + (index / trail.length) * 0.6})`,
                        background: rainbowColors[index % rainbowColors.length]
                    }}
                />
            ))}

            {/* Main cursor dot */}
            <div
                className={`${styles.cursor} ${isPointer ? styles.cursorPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />

            {/* Cursor ring */}
            <div
                className={`${styles.cursorRing} ${isPointer ? styles.cursorRingPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />

            {/* Glow effect */}
            <div
                className={`${styles.cursorGlow} ${isPointer ? styles.cursorGlowPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
        </>
    );
}

export default CustomCursor;
