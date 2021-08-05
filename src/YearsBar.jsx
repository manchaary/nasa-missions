import React from "react";
import "./YearsBar.css";

function YearsBar() {
  return (
    <div className="YearsBar">
      <ul className="menu">
        <li className="menu-item">
          <button className="nav-button">2016</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">2017</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">2018</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">2019</button>
        </li>
        <li className="menu-item">
          <button className="nav-button">2020</button>
        </li>
      </ul>
    </div>
  );
}

export default YearsBar;
