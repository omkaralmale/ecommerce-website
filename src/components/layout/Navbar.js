import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../../icons8-shop-96.png";
import CartButton from "../UI/CartButton";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../Auth/Store/ContextAPI";
import React, { useContext, useState } from "react";

const NavBar = (props) => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [state, setSate] = useState(context.isLogin);

  const handleLogout = () => {
    setSate(true);
    history.replace("/LogIn");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <img
          alt=""
          src={img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <Navbar.Brand href="/home">ShopKaro</Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/Home">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Store">Store</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/About">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/ContactUs">Contact Us</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Login">
                <span onClick={handleLogout}>{state ? "LogOut" : "LogIn"}</span>
              </NavLink>
            </Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">DUMMY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink to="/AddProducts">Add Product</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/ChangePassword">ChangePassword</NavLink>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartButton onShow={props.onShow} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
