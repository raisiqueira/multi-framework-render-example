import { render } from "solid-js/web";
import Couter from "./components/Couter";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote-solid</div>
    <div>Framework: solid-js</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Couter />
  </div>
);
render(App, document.getElementById("app"));
