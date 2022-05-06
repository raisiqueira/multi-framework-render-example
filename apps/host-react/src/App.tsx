import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import Counter from "remote_react/Counter";
import counterWrapped from "remote_solid/counterWrapped";

const App = () => {
  const solidRef = React.useRef(null);

  // React.useEffect(() => {
  //   counterWrapped(solidRef.current);
  // }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto mt-5">
        <div className="flex gap-x-5">
          <div ref={solidRef} />
          <Counter />
        </div>
      </div>
    </React.Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
