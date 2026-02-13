import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    {
        type: "image",
        src: "/assets/photo1.jpg",
        caption: "You're a great son"
    },
    {
        type: "image",
        src: "/assets/photo2.jpg",
        caption: "You're a great brother"
    },
    {
        type: "image",
        src: "/assets/photo3.jpg",
        caption: "You're a great husband"
    },
    {
        type: "video",
        src: "/assets/video1.mp4",
        caption: "You're a great father"
    }
];

const Gallery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = window.innerWidth > 768 ? 600 : 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="gallery-section">
            <h2>You are...</h2>
            <div className="gallery-container">
                <button className="nav-btn left" onClick={() => scroll('left')}>&lt;</button>
                <div className="gallery-scroll" ref={scrollRef}>
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="gallery-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="media-container">
                                {item.type === 'video' ? (
                                    <video controls className="gallery-media">
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={item.src} alt={item.caption} className="gallery-media" />
                                )}
                            </div>
                            <p className="caption">{item.caption}</p>
                        </motion.div>
                    ))}
                </div>
                <button className="nav-btn right" onClick={() => scroll('right')}>&gt;</button>
            </div>
        </section>
    );
};

export default Gallery;
