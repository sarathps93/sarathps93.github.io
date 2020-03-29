import React from 'react';

import MyDetails from '../../components/myDetails/MyDetails';
import contents from '../../../../contents';

const Profile = () => {
  return (
    <>
      <span className="app--myname">{contents.name}</span>
      <div className="app--designation">{contents.designation}</div>
      <MyDetails />
      <div className="app-intro--text">
        <span>{contents.intro}</span>
        <p>{contents.para}</p>
      </div>
      <q className="app--quotes">{contents.quote}</q>
    </>
  );
};

export default Profile;
