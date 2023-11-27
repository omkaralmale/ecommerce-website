import React, { useContext } from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import cartContext from "../../Store/cart-context";

const Cart = (props) => {
  const context = useContext(cartContext);
  const handleRemove = (event) => {
    context.removeProduct(event.target.value);
  };
  return (
    <>
      <Modal show={true} onHide={props.handelHide}>
        <Modal.Header closeButton>
          <Modal.Title>🛍️ Your Cart 🛒</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {context.products.map((item, index) => (
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
                      Price: ${item.price} | Qty: {item.qty}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "10em",
                    }}
                  >
                    <Button onClick={handleRemove} value={item.imageUrl}>
                      Remove
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div
            style={{
              marginTop: "20px",
              textAlign: "right",
              fontSize: "24px",
            }}
          >
            Total Cost:{" "}
            <strong style={{ color: "red", fontSize: "24px" }}>
              ${context.total}
            </strong>
          </div>
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
