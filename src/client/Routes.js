import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import App from './pages/App';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/my-skills" component={Skills} />
        <Route exact path="/my-works" component={Work} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
