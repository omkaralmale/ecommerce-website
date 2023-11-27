import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  products: [],
  total: 0,
  qty: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedProducts = [];
    let updatedTotal = state.total;
    let isExisting = false;

    updatedProducts = state.products.map((item) => {
      if (item.id === action.item.id) {
        isExisting = true;
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });

    if (!isExisting) {
      updatedProducts.push({ ...action.item, qty: 1 });
    }

    updatedTotal += action.item.price;

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  if (action.type === "REMOVE") {
    let updatedProducts = state.products.map((item) => {
      if (item.id === action.id && item.qty > 0) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });

    updatedProducts = updatedProducts.filter((item) => item.qty !== 0);

    const updatedTotal = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  return state;
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
