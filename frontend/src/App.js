import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouder from "./PrivateRouder";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={HomeScreen} path="/advanced-softeware" />
        <Route exact component={HomeScreen} path="/search/:keyword" />
        <Route exact component={HomeScreen} path="/page/:pagenumber" />
        <Route exact component={HomeScreen} path="/search/:keyword/page/:pagenumber" />
        <Route component={SingleProduct} path="/products/:id" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRouder component={ProfileScreen} path="/profile" />
        <Route component={CartScreen} path="/cart/:id?" />
        <PrivateRouder component={ShippingScreen} path="/shipping" />
        <PrivateRouder component={PaymentScreen} path="/payment" />
        <PrivateRouder component={PlaceOrderScreen} path="/placeorder" />
        <PrivateRouder component={OrderScreen} path="/order/:id" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

export default App;