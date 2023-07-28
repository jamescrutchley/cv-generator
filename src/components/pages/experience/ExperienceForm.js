import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormItem from "../generic/FormItem";
import TextareaAutosize from "react-textarea-autosize";

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
        id: "",
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
      id: "",
    },
  };

  setInputs = (values) => {
      this.setState({
        inputs: values,
      });
  };

  trySubmitEntry = () => {
    //validation method here.

    //if editing an existing item, call addentry method with
        // updated inputs but same ID.
    if (this.props.editItem) {
      this.props.addEntryMethod({
        ...this.state.inputs,
        id: this.props.editItem.id,
      });
      //else provide no ID.
    } else {
      this.props.addEntryMethod({ ...this.state.inputs, id: null });
    }

    //reset inputs.
    this.setInputs(this.initial.inputs);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs, // Spread the existing inputs object
        [name]: value, // Update the specific field with the new value
      },
    }));
  };

  //just for updating inputs when an item to edit is passed into component
  componentDidUpdate(prevProps) {
    console.log(this.props.editItem)

    if (prevProps.editItem !== this.props.editItem) {
      if (this.props.editItem) {
        this.setInputs(this.props.editItem);
      } else {
        this.setInputs(this.initial.inputs)
      }
    }

  }

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
            onChange={(e) => this.handleInputChange(e)}
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
            onChange={(e) => this.handleInputChange(e)}
            isInvalid={role === ""}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="startDate"
            label="Start Date"
            name="startDate"
            value={startDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e)}
            isInvalid={null}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="endDate"
            label="End Date"
            name="endDate"
            value={endDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e)}
            isInvalid={null}
            feedback="Please fill out this field."
          />

          <TextareaAutosize
            className="mb-1 w-100 textarea"
            controlId="description"
            label="Description"
            name="description"
            value={description}
            placeholder="Describe your experience in this role."
            onChange={(e) => this.handleInputChange(e)}
            isInvalid={null}
            feedback=""
          />
          <div>
            <Button
              onClick={() => this.trySubmitEntry()}
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
