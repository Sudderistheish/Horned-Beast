import React from "react";
import HornedBeast from "./HornedBeast";
import {Modal, Button} from "react-boostrap";
import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import data from "./data.json";

import { Container, Row, Col } from "react-bootstrap";

class MainP extends React.Component {
  Mainp({data,onImageClick}) {
      return (
          <div>
          {data.map((beast) => (
            <img
            key={beast.id}
            src={beast.image}
            alt={beast.title}

            onClick={() => onImageClick(beast)
            const [selectedHorn, setSelectedHorn] = useState (''); //
            const hornOptions = [
            {value: ", abel: 'All'},
            {value: '1',label: 'One Horn'},
            {value: '2',label: 'Two Horns'},
            {value: '3',label: 'Three Horns'},
            ];

            const handleHornChange = (event) => {
              setSelectedHorn(event.target.value);

            };
            return (
              <div>
                <Form>Form.Group controlld="formHornFilter">
                <Form.Label>Filte by Horns:</Form.Label> 
                <Form.Control 
                
                as="select"
                value = {selectedHorn}
                onChange ={handleHornChange}
                >
                {hornOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          
          {/* Display images based on the selected horn */}
          {/* Replace this with your image rendering logic */}
          {selectedHorn === '1' && <img src="image1.jpg" alt="One Horn" />}
          {selectedHorn === '2' && <img src="image2.jpg" alt="Two Horns" />}
          {selectedHorn === '3' && <img src="image3.jpg" alt="Three Horns" />}
        
      
         </Form>
          
      </div>

    );
  
  


export defualt Main.jsx