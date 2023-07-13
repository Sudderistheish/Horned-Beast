import React from "react";
import HornedBeast from "./HornedBeast";

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
    nameData.forEach((name) => {
      hornedbeastComponents.push(<HornedBeast name={name} />);
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
