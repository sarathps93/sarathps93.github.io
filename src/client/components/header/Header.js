import React from 'react';
import { NavLink } from 'react-router-dom';
import contents from '../../../../contents';

const Header = () => {
  return (
    <div className="app--header">
      <ul className="app-header--list">
        {contents.headerItems.map((item) => (
          <li key={item.label}>
            <NavLink exact to={item.link} className="app-nav--links">
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <a href={contents.blogs.link}>{contents.blogs.label}</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
