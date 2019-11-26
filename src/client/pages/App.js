import React from 'react';
import MyDetails from '../components/myDetails/MyDetails';
import contents from '../../../contents';

import '../../assets/images/dp.jpg';

const App = () => {
  return (
    <div className="app--container">
      <img className="app--dp" src="/dp.jpg" alt="logo" />
      <div className="app--name">
        <span className="app--myname">{contents.name}</span>
        <div className="app--designation">{contents.designation}</div>
        <MyDetails />
        <div className="app-intro--text">
          <span>
            {contents.intro}
          </span>
          <a href="http://google.com">Want to work together?</a>
        </div>
      </div>
    </div>
  );
};

export default App;
