import React from "react";
import ReactDOM from "react-dom";
import FloorPlan from "./FloorPlan";

import "./styles.css";

function App() {
  return <FloorPlan />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
