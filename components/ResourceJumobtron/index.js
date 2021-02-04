import { Jumbotron, Col } from "react-bootstrap";

import styles from "./ResourceJumbotron.module.scss";

const ResourceJumbotron = () => {
  return (
    <>
      <Jumbotron
        className={`${styles.resourceJumbotron} justify-content-center`}
      >
        <Col lg={8}>
          <h1>Resources</h1>
          <hr className="my-4" />
          <p>
            It is well established that our internet needs to be improved for
            the end user. For those that want to expand their knowledge past
            recognition, Styng has put together a wiki of resources. <br></br>
            <br></br>
            On this page you will find resources for making the internet better
            for everyone. Based on Web 3.0, an ideological movement about
            improving the internet, people can inform themselves from leaders in
            technology.
          </p>
        </Col>
      </Jumbotron>
    </>
  );
};

export default ResourceJumbotron;
