import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import 'bootstrap/dist/css/bootstrap.css';

import './app.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProductsContainer} />
      <Route path="/cart" component={CartContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
