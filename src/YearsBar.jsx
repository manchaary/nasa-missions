import React from "react";
import "./YearsBar.css";
import { MenuItem } from './MenuItem';

function YearsBar({ years, handleClick }) {
  return (
    <div className="YearsBar">
      <ul className="menu">
        {years.map((year) => (
          <MenuItem
            key={year}
            label={year}
            onClickHandle={() => handleClick(year)}
          />
        ))}
      </ul>
    </div>
  );
}

export default YearsBar;
