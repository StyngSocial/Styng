import React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.mainNav}>
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className={`cortado ${styles.styngBrand}`}>
              styng social
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="styng-nav" />
          <Navbar.Collapse id="styng-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#whitepaper">Whitepaper</Nav.Link>
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

export default Header;
