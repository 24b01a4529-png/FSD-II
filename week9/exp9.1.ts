import mongoose = require("mongoose");
import dotenv = require("dotenv");
import dns = require("dns");

dns.setServers(["8.8.8.8"]);
dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

interface IStudent {
    name: string;
    age: number;
    course: string;
}

const studentSchema = new mongoose.Schema<IStudent>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true }
});

const Student = mongoose.model<IStudent>("Student", studentSchema);

async function main() {
    try {
        await mongoose.connect(mongoURI);

        console.log("✔ Connected to MongoDB successfully");
        console.log("✔ Database:", mongoose.connection.name);
        console.log("✔ Host:", mongoose.connection.host);
        console.log("--------------------------------------");

        // Start fresh so every run shows the same clean flow
        await Student.deleteMany({ name: "Hansika" });

        // CREATE
        const created = await Student.create({
            name: "Hansika",
            age: 20,
            course: "AI & Data Science"
        });
        console.log("✔ CREATE done:", created.toObject());

        // READ
        const before = await Student.findOne({ name: "Hansika" });
        console.log("✔ READ done:", before?.toObject());

        // UPDATE
        const updated = await Student.findOneAndUpdate(
            { name: "Hansika" },
            { age: 21 },
            { returnDocument: "after" }
        );
        console.log("✔ UPDATE done:", updated?.toObject());

        // READ AFTER UPDATE
        const after = await Student.findOne({ name: "Hansika" });
        console.log("✔ READ AFTER UPDATE done:", after?.toObject());

        console.log("--------------------------------------");
        console.log("✔ All CRUD operations completed successfully");
    } catch (error) {
        console.error("✘ Something went wrong:", error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
        console.log("✔ Disconnected from MongoDB");
    }
}

main();