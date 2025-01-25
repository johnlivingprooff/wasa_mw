export default async (req, res) => {
    if (req.method === "POST") {
        const { email, name, phone, service, message } = req.body;
        console.log({ email, name, phone, service, message })
        res.status(200).json({ message: "Form submitted successfully!" });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
};
