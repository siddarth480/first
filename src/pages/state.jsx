import React, { useState } from "react";


const State = () => {
  
  let text = 'this is text'
  const [count, setCount] = useState(0);
  const [box, setBox] = useState("hello");
  const [bgColor, setBgColor] = useState("#4ab06f");
  const [boxtext, setboxtext] = useState(text);

  const counthandle = () => {
    setCount(count + 1);
  };

  const handle_box = () => {
    setBox("this is new text");
  };

  const toggleColor = () => {
    setBgColor(bgColor === "#4ab06f" ? "#7bd6e8" : "#4ab06f");
    setboxtext("this is new text from siddarth");
  };
  return (
    <div>
      <h1>this is page for state changing !!!</h1>
      <h1> Count : {count}</h1>
      <button onClick={counthandle}> Click the button</button>

      <h2> Text : {box}</h2>

      <button onClick={handle_box}> Change </button>

      <div
        style={{
          width: "200px",
          height: "200px",
          background: bgColor,
          alignContent: "center",
        }}
      >
        {boxtext}
      </div>

      <button
        style={{ background: bgColor, padding: "10px" }}
        onClick={toggleColor}
      >
        Toggle Style
      </button>

      <button onClick={() =>{alert('this is text')}}>this isclack</button>
    </div>
  );
};

export default State;
