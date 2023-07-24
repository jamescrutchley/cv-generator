import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Arrow90degDown } from "react-bootstrap-icons";
import uniqid from "uniqid";

import Form from "react-bootstrap/Form";

import CV from "./Cv";
import FormSection from "./Form-sections/FormSection";
import TextareaAutosize from "react-textarea-autosize";
import List from "./Form-sections/List";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyEditing: "",
      section: 2,
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
          description: "",
        },
        experience: {
          experienceName: "",
          role: "",
          expStartDate: "",
          expEndDate: "",
          expDescription: "",
        },
      },
    };
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  renderSection() {
    const { section, inputs, currentlyEditing } = this.state;
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

                <div>
                  {currentlyEditing ? (
                    // Render this button when currentlyEditing is true
                    <Button
                      onClick={(e) =>
                        this.handleUpdateEntry(currentlyEditing, "education")
                      }
                      className="w-75 m-3"
                      variant="primary"
                    >
                      Update
                    </Button>
                  ) : (
                    // Render this button when currentlyEditing is false
                    <Button
                      onClick={(e) => this.handleAddEntry("education")}
                      className="w-75 m-3"
                      variant="primary"
                    >
                      Add entry
                    </Button>
                  )}
                </div>
              </div>

              {/* current list */}
              <List
                details={this.state.educationList}
                section="Education"
                handleUnitRemoval={this.handleRemoveEntry}
                handleUnitEdit={this.handleEditEntry}
                currentlyEditing={currentlyEditing}
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
        const {
          experienceName,
          role,
          expStartDate,
          expEndDate,
          expDescription,
        } = inputs.experience;
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

                <TextareaAutosize
                  className="mb-1 w-100 textarea"
                  controlId="expDescription"
                  label="Description"
                  name="expDescription"
                  value={expDescription}
                  placeholder="Describe your experience in this role."
                  onChange={(e) => this.handleInputChange(e, "experience")}
                  isInvalid={null}
                  feedback=""
                />
                <div>
                  {currentlyEditing ? (
                    // Render this button when currentlyEditing is true
                    <Button
                      onClick={(e) =>
                        this.handleUpdateEntry(currentlyEditing, "experience")
                      }
                      className="w-75 m-3"
                      variant="primary"
                    >
                      Update
                    </Button>
                  ) : (
                    // Render this button when currentlyEditing is false
                    <Button
                      onClick={(e) => this.handleAddEntry("experience")}
                      className="w-75 m-3"
                      variant="primary"
                    >
                      Add entry
                    </Button>
                  )}
                </div>
              </div>

              {/* Current list */}
              <List
                details={this.state.experienceList}
                section="Experience"
                handleUnitEdit={this.handleEditEntry}
                handleUnitRemoval={this.handleRemoveEntry}
                currentlyEditing={currentlyEditing}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  handleNavigationChange = (e) => {
    const currentSection = this.state.section;
    this.setState({
      currentlyEditing: "",
    });

    let goToSection =
      e.target.name === "back" ? currentSection - 1 : currentSection + 1;

    this.setState({
      section: goToSection,
    });
  };

  handleInputChange = (e, section) => {
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
        expDescription: "",
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

  handleUpdateEntry = (entryID, section) => {
    const entryIndex =
      section === "education"
        ? this.state.educationList.findIndex((entry) => entry.id === entryID)
        : this.state.experienceList.findIndex((entry) => entry.id === entryID);

    if (entryIndex !== -1) {
      const updatedList =
        section === "education"
          ? [...this.state.educationList]
          : [...this.state.experienceList];

      updatedList[entryIndex] = {
        ...updatedList[entryIndex],
        ...this.state.inputs[section],
      };

      this.setState(
        {
          [`${section}List`]: updatedList,
          currentlyEditing: "",
        },
        () => {
          this.setSectionStateValues(section, true);
        }
      );
    }
  };

  handleAddEntry = (section) => {
    // validate section elements(??)
    const targetSection =
      section === "education"
        ? this.state.inputs.education
        : this.state.inputs.experience;
    const targetList = this.state[`${section}List`];

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

  handleEditEntry = (id, section) => {
    this.setState({
      currentlyEditing: id,
    });

    let entryKeys;
    const targetList =
      section === "education"
        ? this.state.educationList
        : this.state.experienceList;

    const selectedEntry = targetList.find((entry) => entry.id === id);

    if (selectedEntry) {
      entryKeys = Object.keys(selectedEntry);
    }

    const newInputValues = entryKeys.reduce((acc, key) => {
      acc[key] = selectedEntry[key];
      return acc;
    }, {});

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [section.toLowerCase()]: newInputValues,
      },
    }));
  };

  handleRemoveEntry = (id, section) => {
    if (id === this.state.currentlyEditing) {
      this.setState(
        {
          currentlyEditing: "",
        },
        () => {
          this.setSectionStateValues(section, true);
        }
      );
    }

    const targetList =
      section === "education"
        ? this.state.educationList
        : this.state.experienceList;

    const updatedList = targetList.filter((entry) => entry.id !== id);

    this.setState({
      [`${section}List`]: updatedList,
    });
  };

  render() {
    const { valid, section, inputs, experienceList, educationList } =
      this.state;

    return (
      <div className="main">
        <Form
          noValidate
          validated={this.state.valid}
          onSubmit={this.handleFormSubmit}
          className="myForm d-flex flex-column"
        >
          <div id="nav-dots" className="nav-dots">
            <div className={section === 1 ? "filled" : null} data-id="1"></div>
            <div className={section === 2 ? "filled" : null} data-id="2"></div>
            <div className={section === 3 ? "filled" : null} data-id="3"></div>
          </div>
          {this.renderSection()}
        </Form>

        <div className="appHeader">
          <div className="header-left">
            <Arrow90degDown size={50} />
            <h1>
              Your Data Goes In
              <p className="disclaimer">Promise we won't keep it</p>
            </h1>
          </div>
          <div className="header-right">
            <h1>
              Your CV Comes Out
              <p className="disclaimer">Employment guaranteed</p>
            </h1>
            <Arrow90degDown className="arrowInverted" size={50} />
          </div>
        </div>

        <CV
          general={inputs.general}
          education={educationList}
          experience={experienceList}
        />
      </div>
    );
  }
}

export default UserForm;
