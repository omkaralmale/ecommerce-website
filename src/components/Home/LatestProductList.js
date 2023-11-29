import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const LatestProductList = (props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://ecommerece-website-1a-default-rtdb.firebaseio.com/products/${props.id}.json`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Product deleted successfully");
      } else {
        console.log("Failed to delete product");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <img variant="top" src={props.image_url} alt="Not Found" />
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
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LatestProductList;
