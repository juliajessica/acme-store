import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

import './app.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProductsContainer} />
      <Route path="/cart" component={CartContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
