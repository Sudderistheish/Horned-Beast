import React from "react";
import { Modal, Button } from "react-bootstrap";
class HornedBeast extends React.Component {
  render() {
    return (
      <Modal show={true} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div  className='imgContainer'>
           
            <img
              src={this.props.beast.image_url}
              alt={this.props.beast.title}
            />
          </div>
          <p>{this.props.beast.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default HornedBeast;
