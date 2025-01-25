import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();
        const result = await fetch("/api/sendContactForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                name,
                phone,
                service,
                message,
            }),
        });

        setStatusMessage(await result.text());
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
                <select name="services" id="service" required>
                    <option value={service} onChange={(e) => setService(e.target.value)}>Select Service</option>
                    <option value={service} onChange={(e) => setService(e.target.value)}>Study Loans [Post-Graduate]</option>
                    <option value={service} onChange={(e) => setService(e.target.value)}>Student VISA</option>
                    <option value={service} onChange={(e) => setService(e.target.value)}>Europe Jobs</option>
                    <option value={service} onChange={(e) => setService(e.target.value)}>Scholarships</option>
                    <option value={service} onChange={(e) => setService(e.target.value)}>General Services</option>
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
        <div class="side-img-form"></div>
        </section>
    );
}
