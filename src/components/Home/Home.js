import React, { useState, useEffect } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Carousel from "react-bootstrap/Carousel";
import img from "../../cloth.jpg";
import img1 from "../../cloth4.jpg";
import img2 from "../../shoes.jpg";
import Image from "react-bootstrap/Image";
import LatestProducts from "./LatestProducts";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  const [DATA, setDATA] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const collectData = async () => {
      try {
        setVisible(true);
        const response = await fetch("https://api.storerestapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setDATA(data.data);
        setVisible(false);
      } catch (error) {
        console.log(error);
      }
    };
    collectData();
  }, []);
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
      {!visible && <LatestProducts data={DATA} />}
      {visible && (
        <div style={{ textAlign: "center" }} className="mt-3">
          <Spinner
            animation="border"
            variant="danger"
            style={{ animationDuration: "0.5s" }}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
