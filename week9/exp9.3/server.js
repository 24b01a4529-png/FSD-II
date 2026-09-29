const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

let students = [
    {
        id: 1,
        name: "Hansika",
        course: "AI & Data Science"
    },
    {
        id: 2,
        name: "Rahul",
        course: "Computer Science"
    }
];

// GET
app.get("/api/students", (req, res) => {
    res.json(students);
});

// POST
app.post("/api/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);

    res.json(student);
});

// PUT
app.put("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json(student);
});

// DELETE
app.delete("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});