import '../styles/Partners.css';
import React from 'react';
import partner1 from '../assets/partners/bau.jpg';
import partner2 from '../assets/partners/cyprus.png';
import partner3 from '../assets/partners/ea-inst-logo-inti.png';
import partner4 from '../assets/partners/rntu.png';
import partner5 from '../assets/partners/Teaching_House.jpg';
import partner6 from '../assets/partners/ITM.jpg';
import partner7 from '../assets/partners/sicas.png';
import partner8 from '../assets/partners/Svimt-LOgo-1024x1024.png';
import partner9 from '../assets/partners/Sol_Camps.jpg';
import partner10 from '../assets/partners/Oxford_English_center.jpg';
import partner11 from '../assets/partners/pvi.jpg';
import partner12 from '../assets/partners/holmes.jpg';
import partner13 from '../assets/partners/ITM2.png';
import partner14 from '../assets/partners/africred.png';
import partner15 from '../assets/partners/Homes_Institute.jpg';

export default function Partners() {
    return (
        <div className="partners">
            <h2>Our Partners</h2>
            <div className="partner-list">
                <div className="partner">
                    <img src={partner1} alt="BAU" />
                </div>
                <div className="partner">
                    <img src={partner2} alt="Cyprus" />
                </div>
                <div className="partner">
                    <img src={partner3} alt="EA Institute" />
                </div>
                <div className="partner">
                    <img src={partner4} alt="RNTU" />
                </div>
                <div className="partner">
                    <img src={partner5} alt="Teaching House" />
                </div>
                <div className="partner">
                    <img src={partner6} alt="ITM" />
                </div>
                <div className="partner">
                    <img src={partner7} alt="SICAS" />
                </div>
                <div className="partner">
                    <img src={partner8} alt="SVIMT" />
                </div>
                <div className="partner">
                    <img src={partner9} alt="Sol Camps" />
                </div>
                <div className="partner">
                    <img src={partner10} alt="Oxford English Center" />
                </div>
                <div className="partner">
                    <img src={partner14} alt="Africred" />
                </div>
                <div className="partner">
                    <img src={partner11} alt="PVI" />
                </div>
                <div className="partner">
                    <img src={partner12} alt="Holmes" />
                </div>
                <div className="partner">
                    <img src={partner13} alt="ITM" />
                </div>
                <div className="partner">
                    <img src={partner15} alt="Homes Institute" />
                </div>
            </div>
        </div>
    );
}