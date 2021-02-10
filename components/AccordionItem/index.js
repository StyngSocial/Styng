import Head from "next/head";
import { Accordion } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faFilm,
  faPlay,
  faNewspaper,
  faBook,
  faBuilding,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AccordionItem.module.scss";

const AccordionItem = (category) => {
  const { name, children, section, icon } = category;

  return (
    <>
      <Head>
        <title>Styng Social | Resources</title>
      </Head>
      <div className="accordion-item">
        <div className="accordion-header" id={section}>
          <Accordion.Toggle
            eventKey={section}
            className={`accordion-button collapsed ${styles.accordionHeader}`}
          >
            {console.log(icon)}
            <FontAwesomeIcon
              icon={faIcon(icon)}
              className={styles.icon}
            ></FontAwesomeIcon>
            {name}
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey={section}>
          <div className="d-flex flex-row flex-wrap justify-content-start">
            {children}
          </div>
        </Accordion.Collapse>
      </div>
    </>
  );
};

const faIcon = (i) => {
  switch (i) {
    case "faVideo":
      return faVideo;
    case "faFilm":
      return faFilm;
    case "faPlay":
      return faPlay;
    case "faNewspaper":
      return faNewspaper;
    case "faBook":
      return faBook;
    case "faBuilding":
      return faBuilding;
    case "faMicrophone":
      return faMicrophone;
    default:
      return "";
  }
};

export default AccordionItem;
