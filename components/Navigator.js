import React from "react";
import Link from "next/link";

import { Navbar, Nav, Container } from "react-bootstrap";

const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className="cortado">styng social</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Whitepaper</Nav.Link>
              <Link href="/resources" passHref>
                <Nav.Link>Resources</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigator;
