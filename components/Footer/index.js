import styles from "./Footer.module.scss";
import { Container } from "react-bootstrap";

import {
  faLinkedin,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <hr className="my-8" />
        <Container>
          <a href="https://www.instagram.com/styng.social/" target="_blank">
            <FontAwesomeIcon
              className={styles.footerIcon}
              icon={faInstagram}
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/styng-social-b23337201/"
            target="_blank"
          >
            <FontAwesomeIcon
              className={styles.footerIcon}
              icon={faLinkedin}
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a href="https://styng-social.medium.com/" target="_blank">
            <FontAwesomeIcon
              className={styles.footerIcon}
              icon={faMedium}
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <span className="float-end">Styng Social LLC 2021 &#169;</span>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
