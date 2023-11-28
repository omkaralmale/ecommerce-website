import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const LatestProductList = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <img
        variant="top"
        src={`https://source.unsplash.com/fashion/800x800/?img=1`}
        alt="Not Found"
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
        <Card.Link>
          <Button variant="primary">View</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LatestProductList;
