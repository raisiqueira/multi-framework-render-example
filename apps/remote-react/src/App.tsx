import React from "react";
import ReactDOM from "react-dom";
import AwesomeButton from "./components/AwesomeButton";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="text-blue-700">Name: Remote React</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <AwesomeButton />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
