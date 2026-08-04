class Student {
    readonly studentId: number;
    name: string;
    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}
let s1 = new Student(101, "Hansika");
s1.display();