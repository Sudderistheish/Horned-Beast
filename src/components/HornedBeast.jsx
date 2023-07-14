import React from "react";

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

export default HornedBeast;
