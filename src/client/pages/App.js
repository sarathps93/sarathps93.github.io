import React from 'react';

import contents from '../../../contents';

import '../../assets/images/dp.jpg';
import '../../assets/images/github.jpg';
import '../../assets/images/npm.png';
import '../../assets/images/docker.png';
import '../../assets/images/linkedIn.png';
import '../../assets/images/code.png';

const createMarkup = (content) => ({ __html: content });
const App = (props) => {
  return (
    <div className="app--container">
      <div className="app-dp--container">
        <img className="app--dp" src="./build/dp.jpg" alt="logo" />
        <div className="app-sidepane--container">
          <input type="checkbox" id="app--accordion" />
          <label htmlFor="app--accordion">{contents.accordionLabel}</label>
          {contents.contact.map((item) => (
            <div key={item.label} className="app-sidepane--items">
              <item.component />
              <span dangerouslySetInnerHTML={createMarkup(item.content)} />
            </div>
          ))}
        </div>
      </div>
      <div className="app-right--container">
        {props.children}
      </div>
    </div>
  );
};

export default App;
