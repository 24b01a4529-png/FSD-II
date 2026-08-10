import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;
app.use(express.json());
let students = [
    { id: 1, name: "Anu", branch: "CSE" },
    { id: 2, name: "Riya", branch: "AIDS" }
];
app.post("/students", (req: Request, res: Response) => {
    const student = req.body;
    students.push(student);
    res.json(student);
});
app.put("/students/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    student.name = req.body.name;
    student.branch = req.body.branch;
    res.json(student);
});
app.delete("/students/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    students = students.filter(s => s.id !== id);

    res.json({ message: "Student deleted successfully" });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});