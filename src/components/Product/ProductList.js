import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import cartContext from "../../Store/cart-context";

const ProductList = (props) => {
  const context = useContext(cartContext);
  const handleAdd = () => {
    context.addProduct({
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      qty: 1,
    });
  };

  const cardStyle = {
    width: "18rem",
    height: "320px", // Set a fixed height for the card
  };

  const imageStyle = {
    overflow: "hidden",
    height: "180px", // Fixed height for the image
  };

  const zoomImageStyle = {
    transition: "transform 0.3s ease-in-out",
    width: "100%", // Ensure the image takes the full width
  };

  const handleHover = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <Card style={cardStyle} className="mt-3">
      <div
        style={imageStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Card.Img
          variant="top"
          src={props.image}
          style={zoomImageStyle}
          alt={props.title}
        />
      </div>
      <Card.Body style={{ padding: "8px" }}>
        <Card.Title
          style={{ fontSize: "18px", height: "48px", overflow: "hidden" }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            color: "red",
            fontSize: "20px",
            margin: "8px 0",
            height: "30px",
            overflow: "hidden",
          }}
        >
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
