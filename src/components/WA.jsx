import React from 'react';
import { FaSquareWhatsapp } from "react-icons/fa6";

const styles = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    fontSize: '2.5rem',
    color: '#25D366', // WhatsApp color hex
    cursor: 'pointer',
    zIndex: 1000,
    textShadow: '0 0 5px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2)',
};

export default function WA() {
    return (
        <div>
            <a href="https://wa.me/265998993336" target='_blank' rel='noreferrer'>
                <FaSquareWhatsapp style={styles}/>
            </a>
        </div>
    );
};