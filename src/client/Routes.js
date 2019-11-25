import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
