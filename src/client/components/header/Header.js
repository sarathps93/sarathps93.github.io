/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import contents from '../../../../contents';

const Header = () => {
  useEffect(() => {
    const hamburgerMenu = document.getElementById('app-header--toggle');
    document.querySelector('.app-header--list').addEventListener('click', () => {
      if (hamburgerMenu.checked) {
        hamburgerMenu.checked = false;
      }
    });
  }, []);

  return (
    <div className="app--header">
      <input type="checkbox" id="app-header--toggle" />
      <label htmlFor="app-header--toggle">
        <span className="app--navicon" />
      </label>
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
