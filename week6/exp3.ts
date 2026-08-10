import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;

function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome" });
});

app.get("/student", (req: Request, res: Response) => {
    res.json({
        id: 101,
        name: "Hansika",
        branch: "AI&DS"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});