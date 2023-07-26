import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FormSection from "../generic/formItem";

class GeneralForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                fname: "",
                lname: "",
                dob: "",
                email: "",
                address: "",
                mobile: "",
                homePhone: "",
              }
        }
    }
  render() {
    const { fname, lname, dob, email, address, mobile, homePhone } = this.state.inputs
    return (
      <Form>
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
      </Form>
    );
  }
}

export default GeneralForm;
