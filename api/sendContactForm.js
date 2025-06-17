const nodemailer = require('nodemailer');

export default async (req, res) => {
    if (req.method === "POST") {
        const { email, name, phone, service, message } = req.body;

        try {
            const transporter = nodemailer.createTransporter({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'studyabroad275@gmail.com', // or another recipient
                subject: 'Web Contact Form',
                text: `Service Requested: ${service}\nMessage: ${message}\nPhone: ${phone}\nEmail: ${email}\nName: ${name}`
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: "Message sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to send message." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
};
