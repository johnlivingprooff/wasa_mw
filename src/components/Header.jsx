import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

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
            {isNavVisible ? <IoClose className="menu" onClick={toggleNav} /> : <IoMenu className="menu" onClick={toggleNav} />}
            <nav className={isNavVisible ? "visible" : ""}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={toggleNav}>About Us</a>
                    </li>
                    <li>
                        <a href="#services" onClick={toggleNav}>Services</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleNav}>Contact Us</a>
                    </li>
                    <a href="https://forms.gle/GirbhnEghStmtT5e6" target="_blank" rel="noreferrer">
                        <button class='btn'>Study Loan</button>
                    </a>
                    <a href="/appointment">
                        <button class='btn'>Book Appointment</button>
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
