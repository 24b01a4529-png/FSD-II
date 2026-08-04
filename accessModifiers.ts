class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let emp = new Employee("Ravi", 50000, "IT");
console.log(emp.name); // Public member can be accessed
emp.display();