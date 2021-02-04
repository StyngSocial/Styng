import Head from "next/head";
import { Accordion, Card, Button } from "react-bootstrap";
import styles from "./AccordionItem.module.scss";

const AccordionItem = (category) => {
  const { action, name, children, section } = category;
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

export default AccordionItem;
