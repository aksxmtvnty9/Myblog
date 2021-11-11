import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Footer from 'app/components/Footer';
import Header from 'app/components/header/Header';
import Intro from 'app/components/Intro';
import Projects from 'app/components/projects/Projects';
import About from 'app/components/About';
import NotFound from 'app/components/NotFound';

const history = createBrowserHistory();

export const renderApp = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);
