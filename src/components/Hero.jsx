import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="hero-content">
                <h1>Happy 47th Birthday, Dad!</h1>
                <p>Celebrating the amazing person that you are.</p>
                <div className="scroll-indicator">
                    <span>↓</span>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
