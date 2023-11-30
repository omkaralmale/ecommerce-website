import React from "react";
import { Badge, Card, Carousel, Button, ListGroup } from "react-bootstrap";

const ProductInfo = () => {
  const product = {
    id: 1,
    name: "Iphone",
    images: [
      "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww",
    ],
    reviews: [
      { username: "User1", comment: "Great product! Highly recommended." },
      {
        username: "User2",
        comment: "Nice product. Satisfied with the purchase.",
      },
      { username: "User1", comment: "Great product! Highly recommended." },
      {
        username: "User2",
        comment: "Nice product. Satisfied with the purchase.",
      },
      { username: "User3", comment: "Impressive quality. Worth buying." },
      { username: "User4", comment: "Good service and fast delivery." },
      {
        username: "User5",
        comment: "Excellent product. Happy with my purchase.",
      },
      { username: "User6", comment: "Highly satisfied with the performance." },
      { username: "User7", comment: "Fantastic product! Loved it." },
      { username: "User8", comment: "Superb quality. Would recommend." },
      { username: "User9", comment: "Great value for the price." },
      { username: "User10", comment: "Very happy with the product." },
      // Add more reviews as needed...
    ],
    description:
      "The iPhone 13 Pro, manufactured by Apple Inc., boasts a 6.1-inch Super Retina XDR display with a resolution of 2532 x 1170 pixels. Featuring a high refresh rate of 120Hz, it supports HDR10 and True-tone technologies, ensuring vibrant colors and sharp visuals. Powering this device is the Apple A15 Bionic chip, a Hexa-core CPU, and an Apple-designed 4-core GPU, delivering impressive performance.In terms of dimensions, the iPhone 13 Pro measures 146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 inches) and weighs 204 grams (7.20 ounces). Additionally, it incorporates features such as Face ID, water and dust resistance (IP68), Apple Pay, Siri, and MagSafe, enhancing user convenience and functionality.",
    rating: 4.5,
  };

  return (
    <div className="container " style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-md-8">
          <Carousel>
            {product.images.slice(0, 8).map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Product ${product.id}`}
                  style={{
                    width: "900px",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Badge bg="primary" pill>
                Rating: {product.rating}
              </Badge>
              <Button variant="success" className="mt-3 d-block w-100">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="mt-4" style={{ width: "850px" }}>
        <h4 className="mb-3">Customer Reviews</h4>
        <ListGroup>
          {product.reviews.map((review, index) => (
            <ListGroup.Item key={index}>
              <div>
                <div className="mb-0">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt=""
                    width="30px"
                    height="30px"
                  />{" "}
                  <strong>{review.username}:</strong>
                </div>
                <div className="mb-0 m-2">{review.comment}</div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default ProductInfo;
