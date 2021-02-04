import { Card, Button } from "react-bootstrap";
import styles from "./Resource.module.scss";

const Resource = (resource) => {
  const { title, description, credit, link } = resource;
  return (
    <>
      <Card className={styles.resourceCard}>
        <Card.Body>
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{credit}</p>
          <p className="card-text">{description}</p>
          <Button
            variant="primary"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Resource;
