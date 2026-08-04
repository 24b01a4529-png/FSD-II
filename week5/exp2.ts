import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome!</h1>");
});

app.get("/student/:id", (req: Request, res: Response) => {
    res.send(`Student ID: ${req.params.id}`);
});

app.get("/search", (req: Request, res: Response) => {
    res.send(`Name: ${req.query.name}, Course: ${req.query.course}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});