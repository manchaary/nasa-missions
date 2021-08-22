import React from "react";
import "./Sidebar.css";
import { MenuItem } from './MenuItem';

function Sidebar({ customers, handleClick }) {
  return (
    <aside className="Sidebar">
      <ul className="menu">
        {customers.length ? customers.map((customer) => (
          <MenuItem
            key={customer}
            label={customer}
            onClickHandle={() => handleClick(customer)}
          />
        )) : 'Loading...'}
      </ul>
    </aside>
  );
}

export default Sidebar;
