import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LatestProductList from "./LatestProductList";
const fashionData = [
  {
    id: 1,
    category: "Clothes",
    name: "T-Shirt",
    price: 25.99,
    description:
      "Comfortable cotton t-shirt available in various colors and sizes.",
  },
  {
    id: 2,
    category: "Clothes",
    name: "Jeans",
    price: 49.99,
    description: "Classic denim jeans with a modern fit and multiple pockets.",
  },
  {
    id: 3,
    category: "Shoes",
    name: "Sneakers",
    price: 39.99,
    description: "Stylish and versatile sneakers suitable for casual wear.",
  },
  {
    id: 4,
    category: "Shoes",
    name: "Boots",
    price: 79.99,
    description:
      "Durable leather boots perfect for various outdoor activities.",
  },
  {
    id: 5,
    category: "Accessories",
    name: "Sunglasses",
    price: 19.99,
    description:
      "UV-protection sunglasses with a trendy design for sunny days.",
  },
  {
    id: 6,
    category: "Accessories",
    name: "Watch",
    price: 99.99,
    description:
      "Elegant wristwatch with a stainless steel strap and water resistance.",
  },
  // Add more fashion items as needed
];

const LatestProducts = () => {
  const productsItems = fashionData.map((item, index) => (
    <Col key={item.id} sm={6} md={6} lg={3} className="mb-4 mr-3 mt-5">
      <LatestProductList
        name={item.name}
        price={item.price}
        description={item.description}
        category={item.category}
      />
    </Col>
  ));
  const rows = [];
  for (let i = 0; i < productsItems.length; i += 3) {
    rows.push(
      <Row key={i} className="justify-content-center">
        {productsItems.slice(i, i + 3)}
      </Row>
    );
  }

  return <Container className="align-items-center">{rows}</Container>;
};

export default LatestProducts;
