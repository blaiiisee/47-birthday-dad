import React from 'react';
import { motion } from 'framer-motion';

const creatorInfo = {
    name: "Ivan",
    greeting: "Thank you for being the right blend of sweet and tough. I hope you have a wonderful birthday!",
    signature: "Happy Birthday! 🎉"
};

const CreatorSection = () => {
    return (
        <section className="creator-section">
            <motion.div
                className="creator-content"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="avatar-container">
                    <img src="/assets/photo4.jpg" alt="Creator" className="avatar" />
                </div>
                <h3>Made with love by {creatorInfo.name}</h3>
                <p className="greeting-text">{creatorInfo.greeting}</p>
                <p className="signature">{creatorInfo.signature}</p>
            </motion.div>
        </section>
    );
};

export default CreatorSection;
