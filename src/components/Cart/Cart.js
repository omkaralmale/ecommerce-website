import React from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";

const cartItems = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <>
      <Modal show={true} onHide={props.handelHide}>
        <Modal.Header closeButton>
          <Modal.Title>🛍️ Your Cart 🛒</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width="50"
                    height="50"
                    rounded
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ margin: "0" }}>
                      Price: ${item.price} | Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handelHide}>
            Close
          </Button>
          <Button variant="success" onClick={props.handelHide}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
