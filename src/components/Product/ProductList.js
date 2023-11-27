import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const ProductList = (props) => {
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
          src={props.Url}
          style={{ ...zoomImageStyle }}
          alt={props.title}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ color: "red", fontSize: "28px" }}>
          ${props.price}
        </Card.Text>
        <Button variant="warning">Add To Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
