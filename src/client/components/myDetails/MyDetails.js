import React from 'react';
import { NavLink } from 'react-router-dom';

import contents from '../../../../contents';
import '../../../assets/files/my_resume.pdf';

const MyDetails = () => {
  return (
    <div className="app-mydetails--container">
      {contents.myDetails.map((item) => (
        <div key={item.label}>
          {item.navLink ? (
            <NavLink className="app--links" to={item.link}>
              <div className={`app--mydetails ${item.class}`}>
                <span className="app-mydetails--text">{item.label}</span>
              </div>
            </NavLink>
          ) : (
            <a className="app--links" href={item.link}>
              <div className={`app--mydetails ${item.class}`}>
                <span className="app-mydetails--text">{item.label}</span>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyDetails;
