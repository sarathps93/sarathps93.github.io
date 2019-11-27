import React from 'react';
import { NavLink } from 'react-router-dom';
import contents from '../../../../contents';

const Header = () => {
  return (
    <div className="app--header">
      <ul className="app-header--list">
        {contents.headerItems.map((item) => (
          <li key={item.labe}>
            <NavLink
              exact
              to={item.link}
              className="app-nav--links"
            >
              {item.label}
            </NavLink>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Header;
