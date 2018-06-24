import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import app from './App';
import List from './shop/list';

const Routes = () =>(
  <BrowserRouter>
    <Switch>        
        <Route path="/list" component={List} />
        <Route path="/" component={app} />
    </Switch>
  </BrowserRouter>
);

export default Routes;