import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import CreatorSection from './components/CreatorSection';
import confetti from 'canvas-confetti';

function App() {
    useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#bb0000', '#ffffff']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#bb0000', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    return (
        <div className="app-container">
            <Hero />
            <Gallery />
            <CreatorSection />
        </div>
    );
}

export default App;
