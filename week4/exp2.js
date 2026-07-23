"use strict";
var StudentInfo;
(function (StudentInfo) {
    class Student {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
let s = new StudentInfo.Student("Hansika", 20);
s.display();
