import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import CV from "./Cv";
import FormSection from "./Form-sections/FormSection";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      generateCV: false,
      valid: false,
      inputs: {
        fname: "",
        lname: "",
        education: [],
      },
    };
  }

  renderSection() {
    const { section, inputs } = this.state;

    switch (section) {
      case 1:
        return (
          <div className="formSection w-100">
            <h2 className="sectionHeader">General Info</h2>
            <Button className="navButton backButton">←</Button>

            <div className="nameSection">
            {/* first name */}
            <FormSection
              controlId="fname"
              label="First Name"
              name="fname"
              value={inputs.fname}
              type="text"
              placeholder="John"
              onChange={this.handleInputChange}
              isInvalid={inputs.fname === ""}
              feedback="Please fill out this field."
            />
            {/* last name */}
            <FormSection
              controlId="lname"
              label="Last Name"
              name="lname"
              value={inputs.lname}
              type="text"
              placeholder="Smith"
              onChange={this.handleInputChange}
              isInvalid={inputs.lname === ""}
              feedback="Please fill out this field."
            />
            </div>
            <Button className="navButton nextButton">→</Button>
          </div>
        );
      case 2:
        return <div className="formSection w-100">
            <h2 className="sectionHeader">Education</h2>
            <FormSection
              controlId="education"
              label="Education"
              name="education"
              value={inputs.education}
              type="text"
              placeholder="Harvard Medical School"
              onChange={this.handleInputChange}
              isInvalid={inputs.education === ""}
              feedback="Please fill out this field."
            />
            <Button>Add entry</Button>
            <Button variant="secondary" className="navButton nextButton">→</Button>
        </div> 
      case 3:
        return <div className="formSection w-100">
        <h2 className="sectionHeader">Experience</h2>
        <FormSection
          controlId="experience"
          label="Experience"
          name="experience"experience
          value={inputs.experience}
          type="text"
          placeholder="Microsoft"
          onChange={this.handleInputChange}
          isInvalid={inputs.experience === ""}
          feedback="Please fill out this field."
        />
        <Button>Add entry</Button>
        <Button type="submit" variant={this.valid ? "success" : "secondary"}>
            Generate
        </Button>
    </div> 
      default:
        return null;
    }
  }


  handleSectionChange(section) {
    // on clicking prev or next section
  }

  handleInputChange = (e) => {
    // should be generic

    const { name, value } = e.target;

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [name]: value,
      },
      valid: this.isFormValid({ ...prevState.inputs, [name]: value }),
    }));
  };

  isFormValid = (inputs) => {
    // Add your validation logic here
    const { fname, lname, education } = inputs;
    return fname !== "" && lname !== "" && education !== "";
  };

  handleEntryChange() {
    //handling user adding or removing an education/experience 'entry'
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Check individual field validity
    try {
        const isEducationValid = form.education.checkValidity();
        const isFnameValid = form.fname.checkValidity();
        const isLnameValid = form.lname.checkValidity();
    
        if (isFnameValid && isLnameValid && isEducationValid) {
          this.setState({ valid: true });
          console.log("Form is valid");
        } else {
          this.setState({ valid: false });
          console.log("Form is invalid");
        }
    } catch {
        console.log('uh oh')
    }

  };

  handleReset() {
    // reset state
  }

  render() {
    const { valid, inputs, section } = this.state;
    // current section will determine what's currently rendered.

    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     {section === 1 && this.renderSection1()}
    //     {section === 2 && this.renderSection2()}
    //     {section === 3 && this.renderSection3()}
    //   </form>
    // );
    return (
      <div className="w-100 d-flex flex-column align-items-center border-primary">
        <Form
          noValidate
          validated={this.state.valid}
          onSubmit={this.handleFormSubmit}
          className="p-3 m-5 myForm"
        >
          {this.renderSection()}

        </Form>

        <div id="nav-dots">
            <div className={section == '1' ? 'filled' : null} data-id="1"></div>
            <div className={section == '2' ? 'filled' : null} data-id="2"></div>
            <div className={section == '3' ? 'filled' : null} data-id="3"></div>
        </div>

        {valid ? (
          <CV details={this.state.inputs} />
        ) : (
          null
        )}
      </div>
    );
  }
}

export default UserForm;
