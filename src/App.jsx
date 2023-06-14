import React, { useState } from "react";
import UserOutput from "./component/userOutput";
import Userinput from "./component/userInput";
import "./App.css";

function App() {
  // adding usestate to upgrade the contents
  const [userName, setuserName] = useState("wande coal");

  const changeHandler = (e) => {
    setuserName(e.target.value);
  };
  return (
    <>
      <div>
        <h1> I am moshood </h1>
        <Userinput onChange={changeHandler} />

        <UserOutput  userName={userName} />
      </div>
    </>
  );
}

export default App;
