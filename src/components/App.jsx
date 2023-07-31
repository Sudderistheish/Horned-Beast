import React from "react";

import MainP from "./MainP";
import data from "./data.json";
import { Modal, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import HornedBeast from "./HornedBeast";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: "",
    };
  }
  handleImageClick = (beast) => {
    this.setState({ selectedBeast: beast });
  };
  handleModalClose = (beast) => {
    this.setState({ selectedBeast: "" });
  };
  render() {
    return (
      <div>
        <MainP data={data} onImageClick={this.handleImageClick} />
        {this.state.selectedBeast && (
          <HornedBeast
            beast={this.state.selectedBeast}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
export default App;
