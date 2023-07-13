import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./MainP";
import HornedBeast from "./HornedBeast";
import { Container, Row, Col } from "react-bootstrap";
import beastsData from "./beastsData.json";

let MainP = () => {
  return (
    <Container>
      <Row>
        {beastsData.map((beast) => (
          <Col sm={6} md={4} lg={3} key={beast.id}>
            <HornedBeast beast={beast} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <Main />
      </div>
    );
  }
}
export default App;
