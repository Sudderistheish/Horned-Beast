import React from "react";
import {Modal, Button} from 'react-bootstrap';
class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.beast.title}</h2>
        <img
          src={this.props.beast.image_url}
          alt={this.props.beast.title}
          title={this.props.beast.title}
        />
        <p>{this.props.beast.description}</p>
      </div>
    );
  }

}
  
SelectedBeast({beast, onclose}) {
  return(
    <Modal show={true} onHide ={onClose}>
    <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image} alt={beast.title} />
        <p>{beast.description}</p>
      </Modal.Body>
    </Modal>
  );

  
}

export default HornedBeast;
