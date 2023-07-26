import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormItem from "../generic/FormItem";
import uniqid from "uniqid";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        educationName: "",
        qualification: "",
        startDate: "",
        endDate: "",
        description: "",
        id: "",
      },
    };
  }

  initial = {
    inputs: {
      educationName: "",
      qualification: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    },
  };

  handleFormSubmit = (e) => {
    console.log("prev default");
    e.preventDefault();
  };

  setInputs = (values = null, reset = false) => {
    if (reset) {
      console.log(this.state.inputs);
      this.setState({
        inputs: this.initial.inputs,
      });
    }
  };


  handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs, // Spread the existing inputs object
        [name]: value, // Update the specific field with the new value
      },
    }));
  };

  render() {
    const { educationName, qualification, startDate, endDate, description } =
      this.state.inputs;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <div className="educationSubsection">
          <FormItem
            controlId="educationName"
            label="Institution"
            name="educationName"
            value={educationName}
            type="text"
            placeholder="Harvard Medical School"
            onChange={(e) => this.handleInputChange(e, "education")}
            isInvalid={educationName === ""}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="qualification"
            label="Qualification"
            name="qualification"
            value={qualification}
            type="text"
            placeholder="Bachelor of Commerce"
            onChange={(e) => this.handleInputChange(e, "education")}
            isInvalid={qualification === ""}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="educationStartDate"
            label="Start Date"
            name="startDate"
            value={startDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "education")}
            isInvalid={null}
            feedback="Ensure start date is valid"
          />
          <FormItem
            controlId="educationEndDate"
            label="End Date"
            name="endDate"
            value={endDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "education")}
            isInvalid={null}
            feedback="Ensure end date is valid"
          />

          <div>
            <Button
              onClick={(e) => this.handleAddEntry("education")}
              className="w-75 m-3"
              variant="primary"
            >
              Add entry
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default EducationForm;
