import React from 'react';
import MyDetails from '../components/myDetails/MyDetails';
import contents from '../../../contents';

import '../../assets/images/dp.jpg';
import '../../assets/images/github.jpg';
import '../../assets/images/npm.png';
import '../../assets/images/docker.png';
import '../../assets/images/linkedIn.png';
import '../../assets/images/code.png';

const createMarkup = (content) => ({ __html: content });
const App = () => {
  return (
    <div className="app--container">
      <div className="app-dp--container">
        <img className="app--dp" src="/dp.jpg" alt="logo" />
        <div className="app-sidepane--container">
          <input type="checkbox" id="app--accordion" />
          <label className="tab-label" htmlFor="app--accordion">{contents.accordionLabel}</label>
          {contents.contact.map((item) => (
            <div key={item.label} className="app-sidepane--items">
              <item.component />
              <span dangerouslySetInnerHTML={createMarkup(item.content)} />
            </div>
          ))}
        </div>
      </div>
      <div className="app--name">
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
      </div>
    </div>
  );
};

export default App;
