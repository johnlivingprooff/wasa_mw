import React, { useState } from 'react';
import '../styles/Services.css';
import { BsAirplaneFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineModelTraining } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: <BsAirplaneFill id='icon' />,
            title: "VISA ADVISORY AND ASSISTANCE",
            description: "Are you looking to travel to a foreign country but are unsure of the VISA requirements? Do you need...",
            moreInfo: (
                <>
                    <p>We provide comprehensive advisory services to ensure you have all the necessary documents and meet all the requirements for a successful VISA application.</p>
                    <p>Our assistance includes document preparation, application submission, and follow-up with the relevant authorities.</p>
                </>
            )
        },
        {
            icon: <GiGraduateCap id='icon' />,
            title: "INTERNATIONAL STUDENT RECRUITMENT",
            description: "Applying to universities can be a daunting task. It's important to find the right school for yourself...",
            moreInfo: (
                <>
                    <p>We assist students in finding and applying to universities that match their academic and career goals.</p>
                    <p>Our services include application guidance, document review, and interview preparation to increase your chances of acceptance.</p>
                </>
            )
        },
        {
            icon: <FaHelmetSafety id='icon' />,
            title: "INTERNATIONAL JOB PLACEMENT",
            description: "Imagine being able to find the best talent from all over the world and have them relocated to your des...",
            moreInfo: (
                <>
                    <p>Our job placement services connect employers with qualified candidates from around the globe.</p>
                    <p>We handle the recruitment process, including candidate screening, interviews, and relocation assistance, to ensure a smooth transition for both employers and employees.</p>
                </>
            )
        },
        {
            icon: <MdOutlineModelTraining id='icon' />,
            title: "INTERNATIONAL TRAINING AND WORKSHOPS",
            description: "Are you planning on developing your workforce? Perhaps through trainings and workshops...",
            moreInfo: (
                <>
                    <p>We offer a variety of training programs and workshops designed to enhance the skills and knowledge of your workforce.</p>
                    <p>Our programs cover a wide range of topics and are tailored to meet the specific needs of your organization.</p>
                </>
            )
        },
        {
            icon: <FaMoneyCheckAlt id='icon' />,
            title: "Educational Loans – Study Now, Pay Later",
            description: "Many Malawians dream of studying abroad but struggle with financing...",
            moreInfo: (
                <>
                    <p>Many Malawians dream of studying abroad but struggle with financing.</p>
                    <p>We have partnered with international financing giants to provide educational loans that make studying abroad more accessible.</p>
                    <p>Our loan programs offer flexible repayment options and competitive interest rates to help you achieve your educational goals without financial stress.</p>
                    
                    <h4>These loans are designed for postgraduatestudies and cover:</h4> 
                    <ul>
                        <li>Tuition fees</li> 
                        <li>Airfare </li>
                        <li>Living expenses</li> 
                        <li>Accommodation</li> 
                        <li>Food </li>
                        <li>Transportation </li>
                        <li>Course materials</li>

                    </ul>
                </>
            )
        }
    ];

    const handleReadMore = (index) => {
        setSelectedService(services[index]);
    };

    const handleClosePopup = () => {
        setSelectedService(null);
    };

    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="service-list">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        {service.icon}
                        <h3>{service.title}</h3>
                        <p>{service.description}&nbsp;
                        <button onClick={() => handleReadMore(index)}>Read More</button></p>
                    </div>
                ))}
            </div>
            {selectedService && (
                <div className="popup" onClick={handleClosePopup}>
                    <div className="popup-content">
                        <h3>{selectedService.title}</h3>
                        <p>{selectedService.moreInfo}</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;