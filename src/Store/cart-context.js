import React from "react";

const cartContext = React.createContext({
  products: [],
  total: 0,
  addProduct: (item) => {},
  removeProduct: (id) => {},
});

export default cartContext;
