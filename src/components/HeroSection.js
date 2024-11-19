// src/components/HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
    const videoRef = useRef(null);
    const [videoScale, setVideoScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            // Ajusta el tamaño del video al hacer scroll
            const scrollY = window.scrollY;
            const scale = Math.max(0.6, 1 - scrollY / 1000);
            setVideoScale(scale);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>Stem4All</h1>
                <p>Es un programa dirigido a alumnos de nivel media superior en la cual podrán complementar sus estudios con videos que despejen esas dudas y lo hagan ver más fácil :)</p>
            </div>
            <div 
                className="hero-video-container" 
                style={{ transform: `scale(${videoScale})` }}
            >
                <video ref={videoRef} src="/school.mp4" autoPlay loop muted />
            </div>
        </section>
    );
}

export default HeroSection;
