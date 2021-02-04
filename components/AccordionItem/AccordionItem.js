import { Card, Accordion } from "react-bootstrap";

const AccordionItem = (category) => {
  const { action, name, children } = category;
  return (
    <>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={action}>
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={action}>
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default AccordionItem;
