import React from "react";
import { useState } from "react";

function Con_ren({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

const Event = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>

      <ul>
        <Con_ren name="this is text" isPacked={true} />
        <Con_ren name="this is text" isPacked={false} />
        <Con_ren name="this is text" isPacked={true} />
        <Con_ren name="this is text" isPacked={false} />
      </ul>
    </div>
  );
};

export default Event;
