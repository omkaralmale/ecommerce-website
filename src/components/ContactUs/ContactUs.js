import React, { useRef } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Button, Card, Form } from "react-bootstrap";
const ContactUs = () => {
  const Email = useRef("");
  const Mobile = useRef("");
  const Name = useRef("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      Name: Name.current.value,
      Mobile: Mobile.current.value,
      Email: Email.current.value,
    };

    try {
      const response = await fetch(
        "https://ecommerece-website-1a-default-rtdb.firebaseio.com/Feedback.json",
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
      Mobile.current.value = "";
      Email.current.value = "";
      alert("FeedBack is Submitted ! our Team will Contact you Soon");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-center align-content-center"
        style={{ marginTop: "4%" }}
      >
        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5vyDbCKtId15EJPbYBImgg/2b7145a85c8c7465fec1841c76aefb51/GettyImages-1223341967.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
          />
          <Card.Body>
            <Card.Title>Book Call</Card.Title>
            <Card.Text>
              For any questions or feedback, we're here to help! Reach out to us
              via the form below or email us at{" "}
              <a href="mailto:ShopKaro@contactus.com">ShopKaro@contactus.com</a>{" "}
              Your input matters, and we're eager to assist you.
            </Card.Text>
          </Card.Body>
          <hr />
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={Name} type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={Email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  ref={Mobile}
                  type="tel"
                  placeholder="Enter Mobile Number"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
