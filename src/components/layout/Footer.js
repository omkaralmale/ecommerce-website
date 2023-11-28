import React from "react";
import { Container, Card } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", paddingTop: "30px" }}>
      <Container fluid>
        <Card style={{ border: "none" }}>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title
              style={{
                fontSize: "24px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Connect with us
            </Card.Title>
            <Card.Text style={{ fontSize: "18px", marginBottom: "30px" }}>
              Stay updated with our latest news and offers on social media!
            </Card.Text>
            <div className="social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                  alt="Instagram"
                  width="50px"
                  height="50px"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                  alt="Facebook"
                  width="50px"
                  height="50px"
                />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                  alt="Twitter"
                  width="50px"
                  height="50px"
                />
              </a>
            </div>
          </Card.Body>
          <Card.Footer
            style={{ backgroundColor: "#343a40", borderTop: "none" }}
          >
            <small style={{ color: "white" }}>
              © 2023 Your Company. All rights reserved.
            </small>
          </Card.Footer>
        </Card>
      </Container>
    </footer>
  );
};

export default Footer;
