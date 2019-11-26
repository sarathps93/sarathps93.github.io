import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import App from './pages/App';

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
