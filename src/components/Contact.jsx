import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    phone: phone,
                    service: service,
                    message: message,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setStatusMessage("Message sent successfully.");
        } catch (error) {
            setStatusMessage("Failed to send message. Please try again.");
        }

        setTimeout(() => {
            setStatusMessage("");
        }, 5000);
    };

    return (
        <section>
        <div id='contact-form'>
            <h2>Contact Us</h2>
            <p>For more information, please contact us:</p>

            <form onSubmit={submitForm}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                /><br />
                <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    required
                /><br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                /><br /><br />
                <select name="services" id="service" required onChange={(e) => setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="Study Loans [Post-Graduate]">Study Loans [Post-Graduate]</option>
                    <option value="Student VISA">Student VISA</option>
                    <option value="Europe Jobs">Europe Jobs</option>
                    <option value="Scholarships">Scholarships</option>
                    <option value="General Services">General Services</option>
                </select><br />
                <label htmlFor="message">Leave Your Message:</label><br /><br />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                ></textarea><br /><br />
                <button type="submit">Submit</button>
            </form><br />
            <div id="contact-message">{statusMessage}</div>
        </div>
        <div className="side-img-form"></div>
        </section>
    );
}
