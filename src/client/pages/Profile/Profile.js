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
      </div>
      <div className="app-profile--flextext">{contents.follow}</div>
      {contents.profiles.map((profile) => (
        <a
          href={profile.link}
          key={profile.alt}
          className="app-profile-image--links"
          style={{ backgroundColor: profile.bgColor }}
        >
          <img
            src={profile.path}
            className="app-image--icons"
            alt={profile.alt}
          />
        </a>
      ))}
    </>
  );
};

export default Profile;
