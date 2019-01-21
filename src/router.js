import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './Layouts/BasicLayouts'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"  component={BasicLayout} />
        <Route path="/main" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
