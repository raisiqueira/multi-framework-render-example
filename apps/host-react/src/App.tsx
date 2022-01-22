import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import AwesomeButton from "remote_react/AwesomeButton";
import counterWrapped from "remote_solid/counterWrapped";

const App = () => {
  const solidRef = React.useRef(null);

  React.useEffect(() => {
    counterWrapped(solidRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="text-3xl font-bold text-blue-700">Name: test-host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <div ref={solidRef} />
      <AwesomeButton />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
