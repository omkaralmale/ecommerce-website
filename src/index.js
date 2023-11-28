import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import AddProduct from "./components/Product/addProduct/AddProduct.js";

const router = createBrowserRouter([
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Store",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AddProducts",
    element: <AddProduct />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
