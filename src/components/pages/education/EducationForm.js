import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormItem from "../generic/FormItem";
import TextareaAutosize from "react-textarea-autosize";

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

  componentDidUpdate(prevProps) {
    if (prevProps.editItem !== this.props.editItem) {
      if (this.props.editItem) {
        this.setInputs(this.props.editItem);
      } else {
        this.setInputs(this.initial.inputs);
      }
    }
  }

  render() {
    // if (this.props.id)
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
            onChange={(e) => this.handleInputChange(e)}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="qualification"
            label="Qualification"
            name="qualification"
            value={qualification}
            type="text"
            placeholder="Bachelor of Commerce"
            onChange={(e) => this.handleInputChange(e)}
            feedback="Please fill out this field."
          />
          <FormItem
            controlId="educationStartDate"
            label="Start Date"
            name="startDate"
            value={startDate}
            type="date"
            placeholder=""
            onChange={(e) => this.handleInputChange(e)}
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
            onChange={(e) => this.handleInputChange(e)}
            isInvalid={null}
            feedback="Ensure end date is valid"
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

export default EducationForm;
