import React, { useState, useContext } from "react";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "./Store/ContextAPI";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
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

  const handleChangePassword = () => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (action === "LogIn") {
      var URL =
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data.idToken);
        context.login(data.idToken);
        setLoading(false);
        console.log("Done");
        history.replace("/Home");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
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
      {context.isLogin && <NavBar />}

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
                onClick={handleChangePassword}
                to="#"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Forgot Password
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>

      {/* {context.isLogin && <ChangePassword />} */}
      {context.isLogin && <Footer />}
    </>
  );
};

export default Login;
