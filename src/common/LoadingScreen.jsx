import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        // Hide loading screen after completion
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`${styles.loadingScreen} ${progress >= 100 ? styles.fadeOut : ''}`}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>QG1o</span>
                        <div className={styles.logoRing}></div>
                        <div className={styles.logoRing2}></div>
                    </div>
                </div>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                </div>

                <div className={styles.loadingText}>
                    {progress < 100 ? 'Loading...' : 'Welcome!'}
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
