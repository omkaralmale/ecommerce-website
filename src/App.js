import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar.js";
import Product from "./components/Product/Product.js";
import Footer from "./components/layout/Footer.js";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Product items={productsArr} />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
