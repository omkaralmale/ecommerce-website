import React, { useState } from "react";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("LogIn");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAction = () => {
    setAction(action === "LogIn" ? "SignUp" : "LogIn");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (action === "LogIn") {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbyTlWC4cztAM-keqMmenrXxvAA5lUzBk";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbyTlWC4cztAM-keqMmenrXxvAA5lUzBk";
    }
    await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      "Content-type": "application/json",
    }).then((res) => {
      if (res.ok) {
        console.log("Done");
        setLoading(false);
      } else {
        return res.json().then((data) => {
          setLoading(false);
          const errorMessage = data.error.message;
          alert(errorMessage ? errorMessage : "Unknown Error");
        });
      }
    });
    setEmail("");
    setPassword("");
  };

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

  return (
    <>
      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {action}
              <span> Page</span>
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ marginBottom: "15px" }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
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
                {loading && (
                  <Spinner
                    animation="border"
                    variant="danger"
                    style={{ animationDuration: "0.5s" }}
                  />
                )}
              </div>
              <Button variant="primary" type="submit" style={buttonStyle}>
                {action}
              </Button>
            </Form>
            <div className="m-2 d-flex justify-content-sm-around">
              <Link
                to="#"
                onClick={handleAction}
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {action === "LogIn" ? "Have Account" : "Back to Login"}
              </Link>
              <Link
                to="#"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Forgot Password
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
