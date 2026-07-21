namespace StudentInfo {
    export class Student {
        constructor(public name: string, public age: number) {}

        display(): void {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
}

let s = new StudentInfo.Student("Hansika", 20);
s.display();