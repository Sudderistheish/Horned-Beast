import React from "react";
import HornedBeast from "./HornedBeast";

import data from "./data.json";

import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {data.map((beast) => (
            <Col sm={6} md={4} lg={3} key={beast.id}>
              <HornedBeast beast={beast} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Main;
