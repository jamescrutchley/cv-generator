import React, { Component } from "react";
import { Arrow90degDown } from "react-bootstrap-icons";
import uniqid from "uniqid";

import Form from "react-bootstrap/Form";

import CV from "./Cv";

import EducationPage from "./pages/education/EducationPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import GeneralPage from "./pages/general/GeneralPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 2,
    };
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  renderSection() {
    const { section, inputs } = this.state;
    const generalInputs = inputs?.general || {};
    const educationInputs = inputs?.education || {};
    const experienceInputs = inputs?.experience || {};
    switch (section) {
      case 1:
        const { fname, lname, dob, email, address, mobile, homePhone } =
          generalInputs;
        return (
          <GeneralPage
            fname={fname}
            lname={lname}
            dob={dob}
            email={email}
            address={address}
            mobile={mobile}
            homePhone={homePhone}
            handleNavChange={this.handleNavigationChange}
          />
        );
      case 2:
        const { educationName, qualification, startDate, endDate } =
          educationInputs;
        return (
          <EducationPage
            educationList={this.state.educationList}
            educationName={educationName}
            qualification={qualification}
            startDate={startDate}
            endDate={endDate}
            handleNavChange={this.handleNavigationChange}
          />
        );
      case 3:
        const {
          experienceName,
          role,
          expStartDate,
          expEndDate,
          expDescription,
        } = experienceInputs;
        return (
          <ExperiencePage
            experienceList={this.state.experienceList}
            experienceName={experienceName}
            role={role}
            startDate={expStartDate}
            endDate={expEndDate}
            description={expDescription}
            handleNavChange={this.handleNavigationChange}
          />
        );

      default:
        return null;
    }
  }

  handleNavigationChange = (whereTo) => {
    this.setState({
      currentlyEditing: "",
      section: whereTo,
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

        {/* <CV
          general={inputs.general}
          education={educationList}
          experience={experienceList}
        /> */}
      </div>
    );
  }
}

export default Main;
