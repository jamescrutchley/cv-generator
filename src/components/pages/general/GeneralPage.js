import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormSection from "../FormSection";
import List from "../List";

class GeneralPage extends Component {
  render() {
    const {
        fname,
        lname,
        dob,
        email,
        address,
        mobile,
        homePhone,
        handleNavChange
    } = this.props;
    const section = 1;
    return (
      <>
        <div className="formSection w-100">
          <h2 className="sectionHeader">General Info</h2>
          <div className="generalSection">
            
            <List details={['a']} section="General" />
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
