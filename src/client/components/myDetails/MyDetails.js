import React from 'react';
import '../../../assets/files/my_resume.pdf';

const MyDetails = () => {
  return (
    <div className="app-mydetails--container">
      <a className="app--resume" href="/my_resume.pdf">
        <div className="app--mydetails">
          <span className="app-mydetails--text">
          MY RESUME
          </span>
        </div>
      </a>
      <div className="app--mydetails">
        <span className="app-mydetails--text">MY WORK</span>
      </div>
      <div className="app--mydetails">
        <span className="app-mydetails--text">MY SKILLS</span>
      </div>
    </div>
  );
};

export default MyDetails;
