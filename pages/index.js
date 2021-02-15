import { useState, useEffect } from "react";
import Aos from "aos";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Concept from "../assets/styng-social-concept.png";
import Web2 from "../assets/web2.png";
import Web3 from "../assets/web3.png";
import ExecSum from "../assets/icons/executive-summary.svg";
import Whitepaper from "../assets/icons/whitepaper.svg";

import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1100,
    });
  }, []);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleModal = () => {
    setShow(!show);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(`email: ${email}`);
    setEmail("");
    setShow(false);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (res.status >= 400) {
      let errorEmail = "ben@styng.social";
      alert(
        `Signing up for email updates failed.\n\nEmail ${errorEmail} and tell him to fix it.`
      );
    } else {
      alert(
        `Thank you for signing up to receive updates from Styng Social!\n\nEmail: ${email}`
      );
    }
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Styng Social | monetizing clout.</title>
      </Head>
      <Container className={styles.landing}>
        <Row className="justify-content-evenly align-items-center">
          <Col lg={6} md={12} data-aos="fade-right">
            <h1 className="display-4 cortado">
              social media is broken;
              <br />
              let's fix it.
            </h1>
            <p>
              A social media platform built for the user. Enabling users to
              generate income for using and engaging on the platform.
            </p>
            <hr className="my-4" />
            <Button variant="primary" size="lg" onClick={handleModal}>
              Sign Up
            </Button>
          </Col>
          <Col lg={4} md={12} className="auto text-center" data-aos="fade-left">
            <Image src={Concept} height={500} width={257}></Image>
          </Col>
        </Row>
      </Container>
      <div className={styles.skewBgR}>
        <Container className={`${styles.solutions} mw-100`} id="about">
          <Row className="justify-content-center align-items-evenly">
            <Col lg={5} md={12} className="me-lg-3">
              <div data-aos="flip-right">
                <div>
                  <h2 className="primary-color">Social media is exploitive</h2>
                  <hr className="my-4" />
                  <li className="h4">Broken Business Model</li>
                  <p>
                    Top social media platforms generate more than 98% of their
                    revenue from user data collection giving them trillions in
                    market cap. Users receive no benefit or consent for their
                    personal information to be sold.
                  </p>
                  <li className="h4">Behavior Changing</li>
                  <p>
                    Social media has been made addictive and manipulative to
                    benefit maximum profits for the platform.
                  </p>
                  <li className="h4">Polarized</li>
                  <p>
                    Content curation algorithms have segmented users into echo
                    chambers, stripping the ability to empathize and
                    communicate.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12} className="ms-lg-3">
              <div data-aos="flip-left">
                <h2 className={`primary-color ${styles.ourSolution}`}>
                  Our solution
                </h2>
                <hr className="my-4" />
                <p>
                  Styng is flipping the business model of social media. Using
                  technology that has the ability to compensate users for their
                  engagement on Styng.
                </p>
                <p>
                  Styng is creating a platform with a user-first approach.
                  Instead of manipulative closed source algorithms, Styng uses
                  community curated algorithms. Users also have the ability to
                  generate monetary benefit for engaging with other users and
                  curating content.
                </p>
                <p>
                  Traditional social media treats their users as a product
                  instead of users. Big Tech sells their collection of hyper
                  specific user profiles to third parties without user consent.
                  The relationship between targeting certain individuals and
                  algorithmic curation has caused social media feeds to be
                  manipulative and behavior changing.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.business} mw-100`}>
        <div className={styles.scewBgL}>
          <Row className="jusitfy-content-center">
            <Col lg={10} className="mx-auto" data-aos="flip-right">
              <h2 className="primary-color">Breaking the relationship</h2>
              <hr className="my-4" />
              <p>
                Social media relies on collecting user personal information to
                sell to third parties. This relationship exclusively brings
                value to third parties and platforms leaving the user without
                retaining any value of their information. Styng is breaking away
                from Web 2.0 into a new generation of user benefited internet,
                Web 3.0.
              </p>
            </Col>
          </Row>

          <Row className={styles.webGen}>
            <Col lg={6} md={12} className="text-center" data-aos="zoom-in">
              <h3 className="primary-text">Web 2.0</h3>
              <Image src={Web2} width={500} height={500}></Image>
            </Col>
            <Col lg={6} md={12} className="text-center" data-aos="zoom-in">
              <h3 className="primary-text">Web 3.0</h3>
              <Image src={Web3} height={500} width={500}></Image>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className={`${styles.research} mw-100`} id="whitepaper">
        <div className={styles.scewBgL}>
          <Row className="justify-content-evenly">
            <Col
              lg={5}
              md={12}
              className="text-center mx-auto position-relative"
            >
              <Image src={ExecSum} height={75} width={75}></Image>
              <h2 className="primary-color">Executive Summary</h2>
              <hr className="my-4" />
              <p>
                The executive summary is a high level blueprint for Styng. This
                document will include information outside of the technical
                objective. It contains competitive analysis, inspiration,
                business model, and projections.
              </p>
              <Button
                variant="dark"
                disabled
                className="position-absolute bottom-0 translate-middle"
              >
                Executive Summary
              </Button>
            </Col>

            <Col
              lg={5}
              md={12}
              className="text-center mx-auto position-relative"
            >
              <Image src={Whitepaper} height={75} width={75}></Image>
              <h2 className="primary-color">Whitepaper</h2>
              <hr className="my-4" />
              <p>
                A whitepaper is a technical document describing how Styng, the
                platform, works. It will include token economic information,
                token distribution, implementation, and execution.
              </p>

              <Button
                variant="dark"
                disabled
                className="position-absolute bottom-0 translate-middle"
              >
                Whitepaper
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal show={show} onHide={handleModal} centered>
        <Modal.Header>
          <Modal.Title>
            Sign up to receive updates from Styng Social
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="emailSignUp">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={handleInput}
              />
              <hr className="my-4" />
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
