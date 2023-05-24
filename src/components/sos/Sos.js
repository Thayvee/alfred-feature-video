import React from "react";
import { Outlet } from "react-router-dom";

import GoBack from "../../layout/GoBack";
import './Sos.css';

function Sos() {
  return (
    <div id='sos' className="full main-container">
      <Outlet />

      <GoBack/>
    </div>
  );
}

export default Sos;