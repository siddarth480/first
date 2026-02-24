import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const User = (props) => {
  const { id } = useParams(); 
  const { state } = useLocation();

  return (
    <div>
      <h1>This is user details page</h1>
      <h2>User ID: {id}</h2>
      <h2>{state.name}</h2>
      <p>Age: {state.age}</p>
    </div>
  );
};

export default User;
