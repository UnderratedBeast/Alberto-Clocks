import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../data/CartContext";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import VisitorCount from "../visitorCount/VisitorCount";
import logo from "../../assets/img/logo.png";
import "./Navbar.css";

function Navigation() {
  const { cartItems = [], wishlistItems = [] } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-style fixed-top">
      <Container>
        <p><img src={logo} className="nav-logo" alt="Logo" /></p>
        <VisitorCount />
        <Navbar.Brand as={Link} to="/" className="nunito-header alberto">
          Alberto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className={isActive("/about")}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/technology" className={isActive("/technology")}>
              Technology
            </Nav.Link>
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products" className={isActive("/products")}>
                Products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galleries" className={isActive("/galleries")}>
                Gallery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact" className={isActive("/contact")}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaCartPlus /> ({cartItems.length})
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              <FaHeart /> ({wishlistItems.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
