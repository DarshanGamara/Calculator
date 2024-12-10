import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
     let [calVal, setCalVal] = useState("");

     const buttonClickHandler = (value) => {
       if (value === "C") {
           setCalVal("")
       } else if (value === "=") {
            const result = eval(calVal);
            setCalVal(result);
       } else {
           const newDisplayValue = calVal + value;
           setCalVal(newDisplayValue);
       }
     };

  return (
    <>
      <div className="calculator">
        <h2>Calculator</h2>
        <Display displayValue={calVal} />
        <Buttons onBtnClick={buttonClickHandler} />
      </div>
    </>
  );
}

export default App
