import React, { useState } from "react";
import NavBar from "../layout/NavBar";
import { Image, Container, Row, Col } from "react-bootstrap";
import bg from "../../pexels-shattha-pilabut-135620.jpg";
import Footer from "../layout/Footer";
import Cart from "../Cart/Cart";

const About = () => {
  const [cartShow, setCartVisibility] = useState(false);
  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };
  const handleCart = () => {
    setCartVisibility(true);
  };

  const handleHideCart = () => {
    setCartVisibility(false);
  };

  return (
    <>
      <NavBar onShow={handleCart} />
      {cartShow && <Cart handelHide={handleHideCart} />}
      <Container fluid>
        <Row>
          <Col>
            <Image src={bg} style={imageStyle} fluid />
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <h1>Welcome to ShopKaro!</h1>
            <p>
              At ShopKaro, we're passionate about providing you with a seamless
              online shopping experience. Our journey began with a simple idea:
              to create a platform that offers convenience, quality, and a wide
              range of products to suit your needs...
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
