import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../../icons8-shop-96.png";
import CartButton from "../UI/CartButton";

const NavBar = (props) => {
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
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
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
