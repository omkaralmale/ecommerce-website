import React from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Carousel from "react-bootstrap/Carousel";
import img from "../../cloth.jpg";
import img1 from "../../cloth4.jpg";
import img2 from "../../shoes.jpg";
import Image from "react-bootstrap/Image";
import LatestProducts from "./LatestProducts";
const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel>
        <Carousel.Item>
          <Image src={img} text="First slide" width="100%" height="50%" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img1} text="First slide" width="100%" height="50%" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img2} text="First slide" width="100%" height="50%" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <LatestProducts />
      <Footer />
    </>
  );
};

export default Home;
