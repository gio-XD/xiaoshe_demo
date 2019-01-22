import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import BasicLayout from './Layouts/BasicLayouts'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact  component={BasicLayout} />
        <Route path="/"  component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
