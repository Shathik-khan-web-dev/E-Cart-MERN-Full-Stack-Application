import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ECartNavbar() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        setUserRole(decodedToken.role);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Invalid token");
        setIsAuthenticated(false);
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserRole(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {userRole === "admin" && (
              <>
                <Nav.Link href="/admin/user">User Controller</Nav.Link>
                <Nav.Link href="/admin/product">Product Controller</Nav.Link>
              </>
            )}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex gap-3">
            {isAuthenticated ? (
              <Button variant="light" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button href="/signin" variant="light">
                  Login
                </Button>
                <Button href="/signup" variant="light">
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ECartNavbar;
