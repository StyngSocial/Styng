import { Card, Accordion } from "react-bootstrap";

import styles from "./AccordionItem.module.scss";

const AccordionItem = (category) => {
  const { action, name, children } = category;
  return (
    <>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={action}
          className={styles.biggerFont}
        >
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={action}>
          <div className="d-flex flex-row flex-wrap justify-content-start">
            {children}
          </div>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default AccordionItem;
