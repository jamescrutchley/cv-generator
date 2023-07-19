import React, { Component } from "react";

class CV extends Component {

    constructor(props) {
        super(props);
        this.divStyle = {
            width: "210mm",
            height: "297mm",
            border: "1px solid black",
            background: "lightblue",
            fontSize: "22px",
        };
    }

  render() {
    const { fname, lname } = this.props.details;

    return <div 
    style={this.divStyle}
    className="cv">
        <h1 className="name">{fname} {lname}</h1>
    </div>;
  }
}

export default CV;
