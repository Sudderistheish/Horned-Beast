import React from "react";
import './MainP.css'



import { Form } from "react-bootstrap";
import data from "./data.json";



export default class MainP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedHorn:""}
    
  }

  hornOptions = [
    { value: "0", label: "All" },
    { value: "1", label: "One Horn" },
    { value: "2", label: "Two Horns" },
    { value: "3", label: "Three Horns" },
  ]; //{data,onImageClick}
  handleHornChange = (event) => {
   
    this.setState({})//event.targe.value
  };
  render() {
    return (
      <main>
        <div className="imgContainer">
          {data.map((beast) => (
            <img
              key={beast._id}
              src={beast.image_url}
              alt={beast.title}
              onClick={() => this.props.onImageClick(beast)}
              //const [selectedBeast, setSelectedbeast] = useState (''); //
            />
          ))}

          {/* Display images based on the selected horn */}
          {/* Replace this with your image rendering logic */}
          {this.state.selectedHorn === "1" && (
            <img src="image1.jpg" alt="One Horn" />
          )}
          {this.state.selectedHorn === "2" && (
            <img src="image2.jpg" alt="Two Horns" />
          )}
          {this.state.selectedHorn === "3" && (
            <img src="image3.jpg" alt="Three Horns" />
          )}
        </div>
        <div>
          <Form>
            <Form.Group controlld="formHornFilter">
              <Form.Label>Filte by Horns:</Form.Label>
              <Form.Control
                as="select"
                value={this.state.selectedHorn}
                onChange={this.handleHornChange}
              >
                {this.hornOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </main>
    );
  }
}
