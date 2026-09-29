import React from "react";
import ReactDOM from "react-dom/client";

const element = (
    <div>
        <h1>Hello World!</h1>
        <p>This is a simple JSX program.</p>
        <button>Click Me</button>
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);