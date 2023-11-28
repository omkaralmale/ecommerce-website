import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const LatestProductList = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://st4.depositphotos.com/12985848/23898/i/450/depositphotos_238987296-stock-photo-top-view-icon-word-new.jpg"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.category}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="text-danger" style={{ fontSize: "22px" }}>
          ${props.price}
        </Card.Text>
        <Card.Link>
          <Button variant="warning">Buy</Button>
        </Card.Link>
        <Card.Link href="#">
          <Button variant="primary">View</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LatestProductList;
