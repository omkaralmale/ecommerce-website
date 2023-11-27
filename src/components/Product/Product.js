import React from "react";
import ProductList from "./ProductList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = (props) => {
  const products = props.items.map((item, index) => (
    <Col key={item.imageUrl} sm={6} md={6} lg={3} className="mb-4 mr-3 mt-5">
      <ProductList title={item.title} price={item.price} Url={item.imageUrl} />
    </Col>
  ));

  const rows = [];
  for (let i = 0; i < products.length; i += 5) {
    rows.push(
      <Row key={i} className="justify-content-center">
        {products.slice(i, i + 5)}
      </Row>
    );
  }

  return <Container className="align-items-center">{rows}</Container>;
};

export default Product;