import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const ProductList = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.Url} />
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