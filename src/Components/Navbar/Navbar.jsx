import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCart } from "../data/CartContext";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import VisitorCount from '../visitorCount/VisitorCount'
function Navigation() {
  const { cartItems = [], wishlistItems = [] } = useCart();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary nav-style fixed-top"
      >
        <Container>
          
          <p><img src={logo} className="nav-logo"/></p>
          <VisitorCount/>
          <Navbar.Brand href="/" className="nunito-header alberto">
            Alberto
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/technology"
                className={location.pathname === "/technology" ? "active" : ""}
              >
                Technology
              </Nav.Link>
              <NavDropdown title="Explore" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  href="/products"
                  className={location.pathname === "/products" ? "active" : ""}
                >
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/galleries"
                  className={location.pathname === "/galleries" ? "active" : ""}
                >
                  Gallery
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
              <Nav.Link href="/cart">
                <FaCartPlus />({cartItems.length})
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <FaHeart />({wishlistItems.length})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
