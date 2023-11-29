import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import NavBar from "../../layout/NavBar";
import { useRef } from "react";
import Footer from "../../layout/Footer";
import Cart from "../../Cart/Cart";

const AddProduct = () => {
  const [cartShow, setCartVisibility] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const Name = useRef("");
  const Price = useRef("");
  const desc = useRef("");
  const ImageUrl = useRef("");
  const Image_File = useRef("");

  const handleForm = async (event) => {
    event.preventDefault();
    const obj = {
      Name: Name.current.value,
      Price: Price.current.value,
      desc: desc.current.value,
      Image_File: Image_File.current.value,
      image_url: ImageUrl.current.value,
    };

    try {
      const response = await fetch(
        "https://ecommerece-website-1a-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await response.json();
      Name.current.value = "";
      Price.current.value = "";
      desc.current.value = "";
      Image_File.current.value = "";
      ImageUrl.current.value = "";
      alert("Product Added Check on Home Page");
    } catch (error) {
      console.log(error);
    }
  };

  const showForms = () => {
    setShowForm((showForm) => !showForm);
  };

  const handleCart = () => {
    setCartVisibility(true);
  };

  const handleHideCart = () => {
    setCartVisibility(false);
  };

  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginLeft: "45%",
        }}
      >
        <Button onClick={showForms}>Add Product</Button>
      </div>
      <div className="d-flex align-items-center  mt-5">
        <div className="container">
          <NavBar onShow={handleCart} />
          {cartShow && <Cart handelHide={handleHideCart} />}
          {showForm && (
            <Form
              style={{ border: "2px solid black" }}
              className="p-5"
              onSubmit={handleForm}
            >
              <h3 className="mb-4">Add New Product</h3>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    ref={Name}
                    type="text"
                    placeholder="Enter Product Name"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control ref={Price} type="number" placeholder="Price" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    ref={desc}
                    as="textarea"
                    rows={3}
                    placeholder="Enter Product Description"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    ref={Image_File}
                    type="file"
                    placeholder="Image"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Product Image URL</Form.Label>
                  <Form.Control
                    ref={ImageUrl}
                    type="text"
                    placeholder="Enter Product Image URL"
                  />
                </Form.Group>
              </Row>
              <div className="d-grid gap-2">
                <Button variant="warning" type="submit">
                  Submit
                </Button>
                <Button variant="danger" type="button">
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
