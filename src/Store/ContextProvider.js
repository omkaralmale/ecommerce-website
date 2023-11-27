import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  products: [],
  total: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedProduct = [];
    const updatedTotal = state.total + action.item.price * action.item.quantity;

    const existingProductIndex = state.products.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.products[existingProductIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedProduct = [...state.products];
      updatedProduct[existingProductIndex] = updatedItem;
    } else {
      updatedProduct = state.products.concat(action.item);
    }

    return {
      products: updatedProduct,
      total: updatedTotal,
    };
  }
  if (action.type === "REMOVE") {
    return;
  }
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultCart);

  const handleAdd = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    products: state.products,
    total: state.total,
    addProduct: handleAdd,
    removeProduct: handleRemove,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
