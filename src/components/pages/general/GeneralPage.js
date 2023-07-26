import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";
import GeneralForm from "./generalForm";

class GeneralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      currentlyEditing: "",
    };
  }
  render() {
    const { handleNavChange } = this.props;
    return (
      <>
        <div className="formItem w-100">
          <h2 className="sectionHeader">General Info</h2>
          <div className="generalSection">
            <GeneralForm/>
            <List details={["a"]} section="General" />
          </div>
          <Button
            variant="outline-dark"
            onClick={() => handleNavChange(2)}
            className="navButton nextButton"
          >
            →
          </Button>
        </div>
      </>
    );
  }
}
export default GeneralPage;
