import '../styles/Sliders.css';
import { useState, useEffect, useRef } from 'react';
import { GoDot, GoDotFill } from "react-icons/go";

export default function Sliders({ images }) {
    const [currentImage, setCurrentImage] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        startAutoplay();
        // eslint-disable-next-line
        return () => stopAutoplay();
        // eslint-disable-next-line
    }, [images.length]);

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
    };

    const stopAutoplay = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ width: '100%', height: 'auto', display: 'flex', overflow: 'hidden' }}>
                {images.map((image, index) => (
                    <div key={index} className='slide' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                        <img src={image.url} alt={image.alt} className='slide-img'/>
                        <div 
                            className='slide-content'
                            onMouseEnter={stopAutoplay}
                            onMouseLeave={startAutoplay}
                        >
                            <h2>{image.title}</h2>
                            <p>{image.body}</p>
                            <a href={image.link}>{image.ctaTxt}</a>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ position: 'absolute', bottom: '0.5rem', left: '50%', translate: '-50%', display: 'flex', gap: '0.5rem' }}>
                {images.map((_, index) => (
                    <button key={index} className='slide-dot' onClick={() => setCurrentImage(index)} aria-label={`view slide ${index + 1}`}>
                        {currentImage === index ? <GoDotFill /> : <GoDot />}
                    </button>
                ))}
            </div>
        </div>
    );
};
