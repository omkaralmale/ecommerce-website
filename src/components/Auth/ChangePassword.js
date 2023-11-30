import React, { useContext, useRef } from "react";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { AuthContext } from "./Store/ContextAPI";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

const ChangePassword = () => {
  const password = useRef("");
  const context = useContext(AuthContext);
  const cardStyle = {
    maxWidth: "500px",
    margin: "auto",
    marginTop: "100px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "#ffffff",
  };
  const buttonStyle = {
    width: "100%",
  };

  const handleSummation = async (event) => {
    event.preventDefault();
    const change = password.current.value;
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbyTlWC4cztAM-keqMmenrXxvAA5lUzBk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: context.token,
          password: change,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {})
      .catch((error) => {});
  };
  return (
    <>
      {context.isLogin && <NavBar />}
      {context.isLogin && (
        <Container>
          <Card style={cardStyle}>
            <Card.Body>
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                <span> Change Your Password</span>
              </h2>
              <Form onSubmit={handleSummation}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    minLength="8"
                    ref={password}
                    type="password"
                    placeholder="Password"
                    style={{ marginBottom: "15px" }}
                    required
                  />
                </Form.Group>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                >
                  {false && (
                    <Spinner
                      animation="border"
                      variant="danger"
                      style={{ animationDuration: "0.5s" }}
                    />
                  )}
                </div>
                <Button variant="primary" type="submit" style={buttonStyle}>
                  Change Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      )}

      {context.isLogin && <Footer />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>LogIN first</h1>
      </div>
    </>
  );
};

export default ChangePassword;
