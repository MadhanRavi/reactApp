import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement -> React Element - JS Object -> HTML Element (Render)

const heading = React.createElement(
  "div",
  { id: "header" },
  React.createElement(
    "h1",
    { id: "heading", className: "red" },
    "Hello World from My React App 🚀"
  )
);

// JSX -> transpiled to JS code before to reached JS engine - BABEL
// JSX -> React.createElement -> React Element - JS Object -> HTML Element (Render)

const jsxHeading = (
  <h1 className="red">Hello World from My React App JSX 🚀</h1>
);

// Functional Component
const Title = () => <h1>React App 🔥</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h2 className="red">Hello World from My React App Fn Component 🚀</h2>
    <p>{100 + 200}</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
