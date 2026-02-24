import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import "../components/NavBar.css";

export function A() {
  return (
    <div>
      <h2>This is A</h2>
    </div>
  );
}

export function B() {
  return (
    <div>
      <h2>This is B</h2>
    </div>
  );
}

export function C() {
  return (
    <div>
      <h2>This is C</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Nested Routing</h1>

      <div style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "50px" }}>
        <NavLink className="nav-link" to="a" element={<A />}>
          Click A
        </NavLink>
        <NavLink className="nav-link" to="b" element={<B />}>
          Click B
        </NavLink>
        <NavLink className="nav-link" to="c" element={<C />}>
          Click C
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default About;
