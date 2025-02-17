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

        try {
            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": process.env.REACT_APP_BREVO_API_KEY, // Ensure this is defined in .env
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    sender: { name: "WASA | Front Desk", email: "studyabroad275@gmail.com" },
                    to: [{ email: "studyabroad275@gmail.com", name: "WASA | Front Desk" }],
                    replyTo: { email, name },
                    subject: "Web Contact Form",
                    textContent: `Service Requested: ${service} \nMessage: ${message} \nPhone: ${phone} \nEmail: ${email}`,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Message could not be sent.");
            }

            setStatusMessage("Message sent successfully.");
        } catch (error) {
            setStatusMessage(error.message);
        }

        setTimeout(() => {
            setStatusMessage("");
        }, 5000); // Message will disappear after 5 seconds
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
