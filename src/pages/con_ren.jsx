import React, { useState } from "react";

function Text({ val }) {
  if (!val) {
    return <h1>Hello Siddarth</h1>;
  }
  return <h1>Hi Ashish</h1>;
}

const Con_ren = () => {
  const [a, setA] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          background: "#4287f5",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Text val={a} />
      </div>

      <button
        style={{ borderRadius: "10px", padding: "10px 20px" }}
        onClick={() => setA(!a)}
      >
        Click me
      </button>
    </div>
  );
};

export default Con_ren;
