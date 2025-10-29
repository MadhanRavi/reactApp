import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "header" }, [
  React.createElement(
    "h1",
    { id: "heading", className: "red" },
    "Hello World from My React App"
  ),
  React.createElement(
    "h2",
    { id: "subheading", className: "black" },
    "Sub Text"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
