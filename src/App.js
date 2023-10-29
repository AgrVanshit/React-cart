import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";

import "./styles/app.scss";

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
function App() {
  return (
    <BrowserRouter>
      <Header />
    <CustomNavbar /> {/* Include the custom navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
