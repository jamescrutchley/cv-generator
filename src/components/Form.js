import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generateCV: false,
      valid: false,
      inputs: {
        fname: "",
        lname: "",
      },
    };
  }

  //state should represent current 'section' user is filling out and contents of input fields held in object.
  //     this.state = {
  //         section: 1,
  //         inputs: {
  //             //1
  //             general: {
  //                 valid: true,
  //                 name: '',
  //                 dob: '',
  //                 email: '',
  //             },
  //             //2
  //             education: {
  //                 valid: true,
  //                 entry: [{
  //                     name: '',
  //                     startDate: '',
  //                     endDate: '',
  //                     qualification: '',
  //                 }]
  //             },
  //             //3
  //             experience: {
  //                 valid: true,
  //                 entry: [{
  //                     name: '',
  //                     title: '',
  //                     startDate: '',
  //                     endDate: '',
  //             }]
  //         }
  //     }
  // }

  handleSectionChange(section) {
    // on clicking prev or next section
  }

  handleInputChange = (e) => {
    // validation needs to occur here? bootstrap?
    // handling user changing an input field value

    const { name, value } = e.target;

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [name]: value,
      },
    }));
  };

  handleEntryChange() {
    //handling user adding or removing an education/experience 'entry'
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    // render 'cv' element - take user down page to view it.
    // if inputs invalid, display appropriate warnings
    // q: submit button necessary? why not just enable live editing?
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      this.setState({ valid: false }); // Set valid state to false
      console.log(this.state.valid);
    } else {
      this.setState({valid: true})
      console.log("inputs are valid");
    }
  };

  handleReset() {
    // reset state
  }

  render() {
    const { valid } = this.state;
    // current section will determine what's currently rendered.

    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     {section === 1 && this.renderSection1()}
    //     {section === 2 && this.renderSection2()}
    //     {section === 3 && this.renderSection3()}
    //   </form>
    // );
    return (
      <Form
        validated={this.state.valid}
        noValidate
        onSubmit={this.handleFormSubmit}
        className="w-75 d-flex flex-column align-items-center"
      >
        <Form.Group className="mb-1 w-50" controlId="fname">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            required
            onChange={this.handleInputChange}
            className="w-100"
            name="fname"
            type="text"
            placeholder="First Name"
            isInvalid={!this.state.inputs.fname}
          />
          <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-1 w-50" controlId="formLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            required
            onChange={this.handleInputChange}
            name="lname"
            className="w-100"
            type="text"
            placeholder="Last Name"
            isInvalid={!this.state.inputs.lname}
          />
          <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="col-md-2">
          Submit
        </Button>
        <p>{valid ? "Form is valid" : "Form is invalid"}</p>

      </Form>

    );
  }
}

export default UserForm;
