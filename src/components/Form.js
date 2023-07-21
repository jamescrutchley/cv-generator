import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import uniqid from "uniqid";

import Form from "react-bootstrap/Form";

import CV from "./Cv";
import FormSection from "./Form-sections/FormSection";
import List from "./Form-sections/List";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      generateCV: false,
      valid: false,
      experienceList: [],
      educationList: [],
      inputs: {
        general: {
          fname: "",
          lname: "",
          dob: "",
          email: "",
          address: "",
          mobile: "",
          homePhone: "",
        },
        education: {
          educationName: "",
          qualification: "",
          startDate: "",
          endDate: "",
        },
        experience: {
          experienceName: "",
          role: "",
          expStartDate: "",
          expEndDate: "",
        },
      },
    };
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  renderSection() {
    const { section, inputs } = this.state;
    switch (section) {
      case 1:
        const { fname, lname, dob, email, address, mobile, homePhone } =
          inputs.general;
        return (
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
              <List details={[inputs.general]} section="General" />
            </div>
            <Button
              variant="outline-dark"
              onClick={this.handleNavigationChange}
              className="navButton nextButton"
            >
              →
            </Button>
          </div>
        );
      case 2:
        const { educationName, qualification, startDate, endDate } =
          inputs.education;
        return (
          <div className="formSection w-100 justify-items-center">
            <h2 className="sectionHeader">Education</h2>
            <Button
              name="back"
              variant="outline-dark"
              onClick={this.handleNavigationChange}
              className="navButton backButton"
            >
              ←
            </Button>
            <div className="educationSection d-grid">
              <div className="educationSubsection">
                <FormSection
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
                <FormSection
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
                <FormSection
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
                <FormSection
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
                <Button
                  onClick={(e) => this.handleAddEntry("education")}
                  className="w-75 m-3"
                >
                  Add entry
                </Button>
              </div>

              {/* current list */}
              <List
                details={this.state.educationList}
                section="Education"
                handleUnitRemoval={this.handleRemoveEntry}
              />
              {/* [{...:..., ...:...}, {}] */}
            </div>

            <Button
              onClick={this.handleNavigationChange}
              variant="outline-dark"
              className="navButton nextButton"
            >
              →
            </Button>
          </div>
        );
      case 3:
        const { experienceName, role, expStartDate, expEndDate } =
          inputs.experience;
        return (
          <div className="formSection w-100">
            <h2 className="sectionHeader">Experience</h2>
            <Button
              name="back"
              variant="outline-dark"
              onClick={this.handleNavigationChange}
              className="navButton backButton"
            >
              ←
            </Button>
            <div className="experienceSection">
              <div className="experienceSubsection">
                <FormSection
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
                <FormSection
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
                <FormSection
                  controlId="expStartDate"
                  label="Start Date"
                  name="expStartDate"
                  value={expStartDate}
                  type="date"
                  placeholder=""
                  onChange={(e) => this.handleInputChange(e, "experience")}
                  isInvalid={null}
                  feedback="Please fill out this field."
                />
                <FormSection
                  controlId="expEndDate"
                  label="End Date"
                  name="expEndDate"
                  value={expEndDate}
                  type="date"
                  placeholder=""
                  onChange={(e) => this.handleInputChange(e, "experience")}
                  isInvalid={null}
                  feedback="Please fill out this field."
                />
                <Button
                  onClick={(e) => this.handleAddEntry("experience")}
                  className="entryButton align-self-center w-75 m-3"
                >
                  Add entry
                </Button>
              </div>

              {/* Current list */}
              <List
                details={this.state.experienceList}
                section="Experience"
                handleUnitRemoval={this.handleRemoveEntry}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  handleNavigationChange = (e) => {
    console.log("nav");
    const currentSection = this.state.section;
    let goToSection =
      e.target.name === "back" ? currentSection - 1 : currentSection + 1;

    this.setState({
      section: goToSection,
    });
  };

  handleInputChange = (e, section) => {
    console.log(this.state);
    const { name, value } = e.target;

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [section]: {
          ...prevState.inputs[section],
          [name]: value,
        },
      },
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  setSectionStateValues = (section, reset = false) => {
    const initialValues = {
      general: {
        fname: "",
        lname: "",
        dob: "",
      },
      education: {
        educationName: "",
        qualification: "",
        startDate: "",
        endDate: "",
      },
      experience: {
        experienceName: "",
        role: "",
        expStartDate: "",
        expEndDate: "",
      },
    };
    if (reset) {
      this.setState((prevState) => ({
        inputs: {
          ...prevState.inputs,
          [section]: initialValues[section],
        },
      }));
    }
  };

  handleAddEntry = (section) => {
    console.log("adding entry");
    // validate section elements(??)
    const targetSection =
      section === "education"
        ? this.state.inputs.education
        : this.state.inputs.experience;
    const targetList = this.state[`${section}List`];
    console.log("target list is " + targetList);

    const newEntry = { ...targetSection, id: uniqid() };

    const updatedList = [...targetList, newEntry];

    this.setState(
      {
        [section + "List"]: updatedList,
      },
      () => {
        this.setSectionStateValues(section, true);
      }
    );
  };

  handleRemoveEntry = (id, section) => {
    const targetList =
      section === "Education"
        ? this.state.educationList
        : this.state.experienceList;

    const updatedList = targetList.filter((entry) => entry.id !== id);

    console.log("updatedList: " + updatedList);

    this.setState({
      [`${section.toLowerCase()}List`]: updatedList,
    });
  };

  render() {
    const { valid, section, inputs, experienceList, educationList } = this.state;

    return (
      <div className="main">

        <Form
          noValidate
          validated={this.state.valid}
          onSubmit={this.handleFormSubmit}
          className="p-3 myForm d-flex flex-column"
        >
          <div id="nav-dots" className="nav-dots">
          <div className={section === 1 ? "filled" : null} data-id="1"></div>
          <div className={section === 2 ? "filled" : null} data-id="2"></div>
          <div className={section === 3 ? "filled" : null} data-id="3"></div>
        </div>
          {this.renderSection()}
        </Form>

        <Button
          className="generateButton"
          type="submit"
          variant={this.valid ? "success" : "secondary"}
        >
          Generate CV
        </Button>

        <CV general={inputs.general} education={educationList} experience={experienceList}/>
      </div>
    );
  }
}

export default UserForm;
