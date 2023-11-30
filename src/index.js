import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import AddProduct from "./components/Product/addProduct/AddProduct.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import ProductPage from "./components/Pages/ProductPage.js";
import Login from "./components/Auth/Login.js";
import AuthContextProvider from "./components/Auth/Store/ContextAPI.js";
import ChangePassword from "./components/Auth/ChangePassword.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Route path="/About" component={About} exact />
      <Route path="/Store" component={App} exact />
      <Route path="/Home" component={Home} exact />
      <Route path="/LogIn" component={Login} exact />
      <Route path="/ChangePassword" component={ChangePassword} exact />
      <Route path="/AddProducts" component={AddProduct} exact />
      <Route path="/ContactUs" component={ContactUs} exact />
      <Route path="/ProductPage/:id" component={ProductPage} />
    </BrowserRouter>
  </AuthContextProvider>
);
