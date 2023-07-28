import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FormItem from "../generic/FormItem";
import Button from "react-bootstrap/Button";

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
      },
    };
  }

  trySubmitInfo = () => {
    //validation then

    this.props.addInfoMethod(this.state.inputs);
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs, // Spread the existing inputs object
        [name]: value, // Update the specific field with the new value
      },
    }));
  };

  render() {
    const { fname, lname, email, address, mobile, homePhone } =
      this.state.inputs;
    return (
      <Form>
        <div className="generalSubsection">
          {/* first name */}
          <FormItem
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
          <FormItem
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
          <FormItem
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
          <FormItem
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
          <FormItem
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
          <FormItem
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
          <div>
            <Button
              onClick={() => this.trySubmitInfo()}
              className="w-75 m-3"
              variant="primary"
            >
              Add Info
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default GeneralForm;
