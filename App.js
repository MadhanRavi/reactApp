const heading = React.createElement("div", { id: "header" }, [
  React.createElement(
    "h1",
    { id: "heading", class: "red" },
    "Hello World from React"
  ),
  React.createElement("h2", { id: "subheading", class: "black" }, "Sub Text"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
