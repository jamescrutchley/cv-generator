import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormItem from "../generic/FormItem";
import TextareaAutosize from "react-textarea-autosize";
import uniqid from "uniqid";


class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        experienceName: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    };
  }

  initial = {
    inputs: {
      experienceName: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  };

  setInputs = (values = null, reset = false) => {
    if (reset) {
      console.log(this.state.inputs);
      this.setState({
        inputs: this.initial.inputs,
      });
    }
  };

  handleAddEntry = () => {
    console.log("adding entry");
    //validation here.

    const newEntry = { ...this.state.inputs, id: uniqid() };

    console.log(newEntry);

    this.setInputs(null, true);
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
    const { experienceName, role, startDate, endDate, description } =
      this.state.inputs;
    return (
      <Form>
        <div className="experienceSubsection">
          <FormItem
            controlId="experienceName"
            label="Company/Organisation"
            name="experienceName"
            value={experienceName}
            type="text"
            placeholder="Microsoft"
            onChange={(e) => this.handleInputChange(e, "experience")}
            isInvalid={experienceName === ""}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="role"
            label="Role"
            name="role"
            value={role}
            type="text"
            placeholder="Account Manager"
            onChange={(e) => this.handleInputChange(e, "experience")}
            isInvalid={role === ""}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="expStartDate"
            label="Start Date"
            name="expStartDate"
            value={startDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "experience")}
            isInvalid={null}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="expEndDate"
            label="End Date"
            name="expEndDate"
            value={endDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e, "experience")}
            isInvalid={null}
            feedback="Please fill out this field."
          />

          <TextareaAutosize
            className="mb-1 w-100 textarea"
            controlId="expDescription"
            label="Description"
            name="expDescription"
            value={description}
            placeholder="Describe your experience in this role."
            onChange={(e) => this.handleInputChange(e, "experience")}
            isInvalid={null}
            feedback=""
          />
          <div>
            <Button
              onClick={(e) => this.handleAddEntry("experience")}
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

export default ExperienceForm;
