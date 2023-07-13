import React from "react";
import HornedBeast from "./HornedBeast";

import data from './Data.json';

let nameData = [
  "dragon",
  "lizard",
  "chameleon",
  "rhino",
  "unicorn",
  "unilego",
  "narwhal",
  "triceratops",
  "markhor",
  "mouflon",
  "addax",
];

class Main extends React.Component {
  render() {
    let hornedbeastComponents = [];
    data.forEach((HornedBeast) => {
      hornedbeastComponents.push
      (<HornedBeast name ={HornedBeast.name} imageurl=
        {HornedBeast.imageurl}/>
      );
    });

    return (
      <div>
        <h2>HornedBeast:</h2>
        {hornedbeastComponents}
      </div>
    );
  }
}
export default Main;
