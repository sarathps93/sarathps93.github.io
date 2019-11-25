import React from 'react';
import MyDetails from './myDetails/MyDetails';

import '../../assets/images/dp.jpg';

const App = () => {
  return (
    <div className="app--container">
      <img className="app--dp" src="/dp.jpg" alt="logo" />
      <div className="app--name">
        Sarath Pottayil Sasidharan
        <div className="app--designation">Full stack developer</div>
        <MyDetails />
      </div>
    </div>
  );
};

export default App;
