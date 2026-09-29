import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
    return <h1>Student Management</h1>;
}

class Student extends React.Component {
    render() {
        return (
            <div>
                <h2>Student Details</h2>
                <p>Name: Hansika</p>
                <p>Course: AI & Data Science</p>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Header />
            <Student />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);