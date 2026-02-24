import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  function abc() {
    console.log("this is console...", count);
  }
  function acv() {
    console.log("this is console2 ...", data);
  }

  useEffect(() => {
    let a = abc();
  }, []);

  useEffect(() => {
    acv();
  }, [data]);

  const handlecount1 = () => {
    setCount(count + 1);
  };
  const handlecount2 = () => {
    setData(data + 1);
  };

  return (
    <div>
      <h1>This is useEffect</h1>

      <h2>Count : {count}</h2>

      <h2>data : {data}</h2>

      <button onClick={handlecount1}>Click here</button>
      <button onClick={handlecount2}>Click here</button>
    </div>
  );
};

export default UseEffect;
