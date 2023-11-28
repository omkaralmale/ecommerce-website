import React, { useState, useEffect, useMemo } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Carousel from "react-bootstrap/Carousel";
import img from "../../cloth.jpg";
import img1 from "../../cloth4.jpg";
import img2 from "../../shoes.jpg";
import Image from "react-bootstrap/Image";
import LatestProducts from "./LatestProducts";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [DATA, setDATA] = useState([]);
  const [visible, setVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
        setErrorMessage("Something went wrong ....Retrying");
      }
    };
    collectData();
  }, []);

  const carouselItems = useMemo(
    () => [
      {
        imgSrc: img,
        caption: {
          label: "First slide label",
          content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
      },
      {
        imgSrc: img1,
        caption: {
          label: "Second slide label",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
      {
        imgSrc: img2,
        caption: {
          label: "Third slide label",
          content:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        },
      },
    ],
    []
  );

  return (
    <>
      <NavBar />
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Image
              src={item.imgSrc}
              text={item.caption.label}
              width="100%"
              height="50%"
            />
            <Carousel.Caption>
              <h3>{item.caption.label}</h3>
              <p>{item.caption.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {!visible && <LatestProducts data={DATA} />}
      {visible && (
        <div style={{ textAlign: "center" }} className="mt-3">
          <p>{errorMessage}</p>
          <Spinner
            animation="border"
            variant="danger"
            style={{ animationDuration: "0.5s" }}
          />
          <div>
            <Button variant="danger"> Stop Retrying</Button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
