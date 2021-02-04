import styles from "./Footer.module.scss";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <hr className="my-8" />
        <Row className="justify-content-end">
          <Col lg={2}>Instagram</Col>
          <Col lg={2}>LinkedIn</Col>
          <Col lg={2}>Medium</Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
