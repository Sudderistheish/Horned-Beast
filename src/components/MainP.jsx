import React from "react";
import HornedBeast from "./HornedBeast";
import {Modal, Button} from "react-boostrap";

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

            onClick={() => onImageClick(beast)}
          />
        ))}

      </div>

    );
  
  
}

export default Mainp;