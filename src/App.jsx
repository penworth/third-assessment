import React from "react";
import UserOutput from "./component/userOutput";
import Userinput from "./component/userInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Userinput />
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
