import mongoose = require("mongoose");
import dotenv = require("dotenv");
import dns = require("dns");

dns.setServers(["8.8.8.8"]);

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

async function main() {
    try {
        await mongoose.connect(mongoURI);

        console.log("MongoDB connected successfully");

        // CREATE
        const employee = await Employee.create({
            name: "Rahul",
            age: 22,
            department: "IT",
            salary: 30000
        });

        console.log("Created:", employee);

        // READ
        const employees = await Employee.find();

        console.log("Employees:", employees);

        // UPDATE
        const updatedEmployee = await Employee.findOneAndUpdate(
            { name: "Rahul" },
            { salary: 35000 },
            { returnDocument: "after" }
        );

        console.log("Updated:", updatedEmployee);

        // DELETE
        const deletedEmployee = await Employee.findOneAndDelete({
            name: "Rahul"
        });

        console.log("Deleted:", deletedEmployee);

    } catch (error) {
        console.log("Error:", error);
    } finally {
        await mongoose.disconnect();

        console.log("MongoDB disconnected");
    }
}

main();