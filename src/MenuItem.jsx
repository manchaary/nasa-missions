import React from "react";

export const MenuItem = ({ label, onClickHandle }) => (
  <li className="menu-item" onClick={onClickHandle}>
    <button className="nav-button">{label}</button>
  </li>
);
