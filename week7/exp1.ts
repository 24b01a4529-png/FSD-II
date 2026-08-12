import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

declare module "express-session" {
    interface SessionData {
        user?: string;
    }
}

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        req.session.user = username;
        res.send("Login successful");
    } else {
        res.send("Invalid username or password");
    }
});

// Protected page
app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}`);
    } else {
        res.send("Please login first");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});