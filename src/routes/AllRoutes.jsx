import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home";
import About from "../pages/about";

import Class_com from "../pages/class_com";
import State from "../pages/state";
import Event from "../pages/event";
import UseEffect from "../pages/useEffect";
import New from "../pages/new";
import Usestate from "../pages/useState";
import Con_ren from "../pages/con_ren";
import Add_item from "../pages/add_item";
import UseRef from "../pages/useref";
import { useState } from "react"; 


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home todos={todos} />} />

        <Route path="/about" element={<About />} />

        <Route path="/con_ren" element={<Con_ren />} />

        <Route path="/usestate" element={<Usestate />} />

        <Route path="/state" element={<State />} />

        <Route path="/useEffect" element={<UseEffect />} />

        <Route path="/event" element={<Event />} />

        <Route path="/add_item" element={<Add_item />} />

        <Route path="/useref" element={<UseRef />} />

        <Route path="/user/:username" element={<User />} />

        <Route
          path="/class_com"
          element={
            <Class_com
              title="My Class Component"
              description="This is a description for the class component"
            />
          }
        />
      </Routes>
    </div>
  )
}

export default AllRoutes