import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="WASA_mw" id='logo' />
                <span>
                    <h2>WASA</h2>
                    <p>Work And Study Abroad</p>
                </span>
            </div>
            <IoMenu className="menu" onClick={toggleNav} />
            <nav className={isNavVisible ? "visible" : ""}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                    <a href="https://forms.gle/GirbhnEghStmtT5e6" target="_blank">
                        <button class='btn'>Apply for Study Loan</button>
                    </a>
                    <a href="https://work-and-study-abroad.bookafy.com/" target="_blank">
                        <button class='btn'>Book Appointment</button>
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
