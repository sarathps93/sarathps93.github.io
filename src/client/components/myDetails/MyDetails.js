import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/files/my_resume.pdf';

const MyDetails = () => {
  return (
    <div className="app-mydetails--container">
      <a className="app--links" href="/my_resume.pdf">
        <div className="app--mydetails app-mydetails--resume">
          <span className="app-mydetails--text">MY RESUME</span>
        </div>
      </a>
      <NavLink className="app--links" to="/my-works">
        <div className="app--mydetails app-mydetails--work">
          <span className="app-mydetails--text">MY WORK</span>
        </div>
      </NavLink>
      <NavLink className="app--links" to="/my-skills">
        <div className="app--mydetails app-mydetails--skills">
          <span className="app-mydetails--text">MY SKILLS</span>
        </div>
      </NavLink>
    </div>
  );
};

export default MyDetails;
