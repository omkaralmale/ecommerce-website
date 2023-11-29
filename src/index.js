import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import AddProduct from "./components/Product/addProduct/AddProduct.js";
import ContactUs from "./components/ContactUs/ContactUs.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Route path="/About">
      <About />
    </Route>
    <Route path="/Store">
      <App />
    </Route>
    <Route path="/Home">
      <Home />
    </Route>
    <Route path="/AddProducts">
      <AddProduct />
    </Route>
    <Route path="/ContactUs">
      <ContactUs />
    </Route>
    <Route path="/Home/:productId">
      <Home />
    </Route>
  </BrowserRouter>
);
