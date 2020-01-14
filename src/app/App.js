import React, { PureComponent, Fragment } from 'react';
import BaseComponent from './components/baseComponent';
import ProductList from './components/productList';
import ProductDetails from './components/productDetails';
import './scss/layout.scss';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={BaseComponent} />
            <Route path="/items/search/:search" component={ProductList} />
            <Route path="/items/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

