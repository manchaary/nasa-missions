import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <ul className="menu">
        <li className="menu-item">
          <button className="nav-button">LEO</button>
        </li>
        <li className="menu-item active">
          <button className="nav-button">NASA</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">NRO</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">ORS</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">SpaceX</button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
