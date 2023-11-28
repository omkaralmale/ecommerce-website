import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LatestProductList from "./LatestProductList";

const LatestProducts = (props) => {
  console.log(props.data);
  const productsItems = props.data.map((item, index) => (
    <Col key={item.id} sm={6} md={6} lg={3} className="mb-4 mr-3 mt-5">
      <LatestProductList
        ii={item.id}
        name={item.title}
        price={item.price}
        description={item.category.name}
        category={item.createdBy.name}
      />
    </Col>
  ));
  const rows = [];
  for (let i = 0; i < productsItems.length; i += 4) {
    rows.push(
      <Row key={i} className="justify-content-center">
        {productsItems.slice(i, i + 4)}
      </Row>
    );
  }

  return <Container className="align-items-center">{rows}</Container>;
};

export default LatestProducts;
