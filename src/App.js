import React, { useState, useEffect } from "react";
import NavBar from "./components/layout/NavBar.js";
import Product from "./components/Product/Product.js";
import Footer from "./components/layout/Footer.js";
import Cart from "./components/Cart/Cart.js";
import ContextProvider from "./Store/ContextProvider.js";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const [cartShow, setCartVisibility] = useState(false);
  const [productsArray, setProductArray] = useState([]);
  const [visible, setVisible] = useState(true);

  //! FETCHING PRODUCT DATA API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setVisible(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProductArray(data);
        setVisible(false);
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
        {visible ? (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Spinner
              animation="border"
              variant="danger"
              style={{ animationDuration: "0.5s" }}
            />
          </div>
        ) : (
          <Product items={productsArray} /> // Show products if visible state is false
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </ContextProvider>
  );
};

export default App;
