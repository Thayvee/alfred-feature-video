import React from "react";
import { Outlet } from "react-router-dom";

import GoBack from "../../layout/GoBack";
import './Salud.css';

function Salud() {

  return (
    <div id='salud' className="full main-container">
      <Outlet />

      <GoBack/>
    </div>
  );
}

export default Salud;
