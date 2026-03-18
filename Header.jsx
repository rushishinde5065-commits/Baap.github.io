import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import baapLogo from "../assets/baap logo.png";
import "../index.css"; // Ensure global styles like nav-link-custom are loaded

const Header = () => {
  return (
    <Navbar
      expand="xl"
      variant="dark"
      className="py-0 position-sticky top-0 w-100"
      style={{
        backgroundColor: "#06060c",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        zIndex: 1000,
        minHeight: "85px"
      }}
    >
      <Container fluid className="px-4 px-xl-5">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center py-2">
          <img
            src={baapLogo}
            alt="baap company logo"
            style={{
              height: "80px",
              width: "auto",
            }} 
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto ms-4 align-items-center gap-3  gap-xl-4">
            <Nav.Link as={NavLink} end className="nav-link-custom">
              <Link to="/" className="text-light text-decoration-none fw-bold ">Home</Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" className="nav-link-custom d-flex align-items-center">
              <Link to="/about" className="text-light text-decoration-none fw-bold"> About Us </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/services" className="nav-link-custom d-flex align-items-center">
              <Link to="/services" className="text-light text-decoration-none fw-bold"> Services </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/products" className="nav-link-custom d-flex align-items-center">
              <Link to="/products" className="text-light text-decoration-none fw-bold"> Our Products </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/education" className="nav-link-custom">
              <Link to="/education" className="text-light text-decoration-none fw-bold"> Education </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/blogs" className="nav-link-custom">
              <Link to="/blogs" className="text-light text-decoration-none fw-bold"> Blogs </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/community" className="nav-link-custom">
              <Link to="/community" className="text-light text-decoration-none fw-bold"> Community </Link>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              <Link to="/contact" className="text-light text-decoration-none fw-bold"> Contact Us </Link>
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <Button as={Link} to="/become-a-partner" className="btn-premium">
              <Link to="/become-a-partner" className="text-light text-decoration-none fw-bold">Become a Partner</Link>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
