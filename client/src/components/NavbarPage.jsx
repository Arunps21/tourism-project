import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import Login from "./Login";

function NavbarPage() {
  const [show, setShow] = useState(false);

  const [isRegister,setIsRegister] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let modalFun=()=>{
    setIsRegister(!isRegister)
  }


  return (
    <>
      <Navbar expand="lg" className="bg-primary" >
        <Container fluid>
          <Navbar.Brand href="#" className="text-white fw-bold fs-2">
            Kerala Tourism
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-light">
                Login
              </Nav.Link>
              <NavDropdown title="Deals" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Package Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Guides</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/AboutPage" className="text-white">
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>

        {/* ModalBox */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              isRegister ? <Register toggleLogin={modalFun}/> : <Login toggleRegister={modalFun}/>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </>
  );
}

export default NavbarPage;
