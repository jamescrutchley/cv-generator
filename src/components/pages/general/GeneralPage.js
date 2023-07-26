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
            <div className="generalSubsection">
              {/* first name */}
              <FormSection
                controlId="fname"
                label="First Name"
                name="fname"
                value={fname}
                type="text"
                placeholder="John"
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={fname === ""}
                feedback="Please fill out this field."
              />
              {/* last name */}
              <FormSection
                controlId="lname"
                label="Last Name"
                name="lname"
                value={lname}
                type="text"
                placeholder="Smith"
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={lname === ""}
                feedback="Please fill out this field."
              />
              <FormSection
                controlId="dob"
                label="Date of birth"
                name="dob"
                value={dob}
                type="date"
                placeholder=""
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={null}
                feedback=""
              />
              <FormSection
                controlId="email"
                label="Email"
                name="email"
                value={email}
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={null}
                feedback=""
              />
              <FormSection
                controlId="address"
                label="Address"
                name="address"
                value={address}
                type="text"
                placeholder="221B Baker St., London"
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={null}
                feedback=""
              />
              <FormSection
                controlId="mobile"
                label="Mobile Number"
                name="mobile"
                value={mobile}
                type="tel"
                placeholder=""
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={null}
                feedback=""
              />
              <FormSection
                controlId="homePhone"
                label="Home Phone Number"
                name="homePhone"
                value={homePhone}
                type="tel"
                placeholder=""
                onChange={(e) => this.handleInputChange(e, "general")}
                isInvalid={null}
                feedback=""
              />
            </div>
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
