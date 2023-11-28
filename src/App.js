import React, { useState, useEffect } from "react";
import NavBar from "./components/layout/NavBar.js";
import Product from "./components/Product/Product.js";
import Footer from "./components/layout/Footer.js";
import Cart from "./components/Cart/Cart.js";
import ContextProvider from "./Store/ContextProvider.js";

const productsArr = [
  {
    title: "Product 1",
    price: 120,
    imageUrl:
      "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.webp?b=1&s=170667a&w=0&k=20&c=Neqdqli-vKAnG2VSfQVRSGXocaUixRz9JtqEAVs3Ndc=",
  },
  {
    title: "Product 2",
    price: 80,
    imageUrl:
      "https://images.unsplash.com/photo-1700478654842-fe8b07c3f2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Product 3",
    price: 150,
    imageUrl:
      "https://media.istockphoto.com/id/471973362/photo/clothesline-and-laundry.webp?b=1&s=170667a&w=0&k=20&c=QH1mGMh4EPx6vPnTUsFJbiS_Y1v8DOOw2iTxsL4j9sk=",
  },
  {
    title: "Product 4",
    price: 100,
    imageUrl:
      "https://media.istockphoto.com/id/1577689348/photo/happy-young-indian-couple-wearing-traditional-cloths-holding-red-gift-boxes-celebrating-of.webp?b=1&s=170667a&w=0&k=20&c=l4D-ULqRjIAlcrEL9hmv1sZjoZTKlLAHXRYP1hr2dLA=",
  },
  {
    title: "Product 5",
    price: 200,
    imageUrl:
      "https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Product 6",
    price: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1700740760502-f28b1769c8d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Product 7",
    price: 180,
    imageUrl:
      "https://images.unsplash.com/photo-1700910290958-c58b42601b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    title: "Product 8",
    price: 130,
    imageUrl:
      "https://images.unsplash.com/photo-1699614614513-2eb602381f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    title: "Product 9",
    price: 110,
    imageUrl:
      "https://images.unsplash.com/photo-1683009426501-028aabdd7b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    title: "Product 10",
    price: 95,
    imageUrl:
      "https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
];

function App() {
  const [cartShow, setCartVisibility] = useState(false);
  const [productsArray, setProductArray] = useState([]);

  //! FETCHING PRODUCT DATA API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProductArray(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // !handle cart click
  const handleCart = () => {
    setCartVisibility(true);
  };

  //! handle hide cart
  const handleHideCart = () => {
    setCartVisibility(false);
  };

  return (
    <ContextProvider>
      <header>
        <NavBar onShow={handleCart} />
        {cartShow && <Cart handelHide={handleHideCart} />}
      </header>
      <main>
        <Product items={productsArray} />
      </main>
      <footer>
        <Footer />
      </footer>
    </ContextProvider>
  );
}

export default App;
