import React, {useEffect} from 'react'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import jQuery from "jquery"; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import Fail from "./pages/Fail";
import { useSelector } from "react-redux";
import ScrollToTop from "react-router-scroll-top";


const App = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    
    <Router>
      <Switch>
        <ScrollToTop>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/fail">
            <Fail />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </ScrollToTop>
      </Switch>
    </Router> 
   
  );
};

export default App;
