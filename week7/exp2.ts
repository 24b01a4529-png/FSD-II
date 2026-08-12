import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.send("All fields are required");
    }

    if (!email.includes("@")) {
        return res.send("Invalid email");
    }

    if (Number(age) < 18) {
        return res.send("Age must be 18 or above");
    }

    res.send(`
        <h2>Form Submitted Successfully!</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
    `);
});

app.listen(3001, () => {
    console.log("Exp2 server running at http://localhost:3001");
});