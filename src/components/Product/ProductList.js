import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import cartContext from "../../Store/cart-context";

const ProductList = (props) => {
  const context = useContext(cartContext);
  const handleAdd = () => {
    context.addProduct({
      id: props.imageUrl,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      qty: 1,
    });
  };
  const imageStyle = {
    overflow: "hidden",
  };

  const zoomImageStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const handleHover = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <Card style={{ width: "18rem" }}>
      <div
        style={imageStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Card.Img
          variant="top"
          src={props.imageUrl}
          style={{ ...zoomImageStyle }}
          alt={props.title}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ color: "red", fontSize: "28px" }}>
          ${props.price}
        </Card.Text>
        <Button className="rounded-pill" variant="warning" onClick={handleAdd}>
          Add To Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
