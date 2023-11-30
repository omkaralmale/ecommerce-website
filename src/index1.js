import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import "react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import AddProduct from "./components/Product/addProduct/AddProduct.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import ProductPage from "./components/Pages/ProductPage.js";
import Login from "./components/Auth/Login.js";
import AuthContextProvider, {
  AuthContext,
} from "./components/Auth/Store/ContextAPI.js";
import ChangePassword from "./components/Auth/ChangePassword.js";

const Index1 = () => {
  return (
    <AuthContextProvider>
      <Content />
    </AuthContextProvider>
  );
};

const Content = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("Context updated:", context);
  }, [context]);

  return (
    <BrowserRouter>
      {context.isLogin && <Route path="/Store" component={App} exact />}
      {context.isLogin && <Route path="/Home" component={Home} exact />}
      {!context.isLogin && <Route path="/" component={Login} exact />}
      {!context.isLogin && <Route path="/Login" component={Login} exact />}
      {context.isLogin && (
        <Route path="/ChangePassword" component={ChangePassword} exact />
      )}
      {context.isLogin && (
        <Route path="/AddProducts" component={AddProduct} exact />
      )}
      {context.isLogin && (
        <Route path="/ContactUs" component={ContactUs} exact />
      )}
      {context.isLogin && (
        <Route path="/ProductPage/:id" component={ProductPage} />
      )}
      {context.isLogin && <Route path="/About" component={About} />}
    </BrowserRouter>
  );
};

export default Index1;
