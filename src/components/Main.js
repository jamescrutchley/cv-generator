import React, { Component } from "react";
import { Arrow90degDown } from "react-bootstrap-icons";

import CV from "./Cv";

import EducationPage from "./pages/education/EducationPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import GeneralPage from "./pages/general/GeneralPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
    };
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  renderSection() {
    const { section, inputs } = this.state;
    const generalInputs = inputs?.general || {};
    const educationInputs = inputs?.education || {};
    const experienceInputs = inputs?.experience || {};

    const { fname, lname, dob, email, address, mobile, homePhone } =
      generalInputs;
    const { educationName, qualification, startDate, endDate } =
      educationInputs;
    const { experienceName, role, expStartDate, expEndDate, expDescription } =
      experienceInputs;
    return (
      <div
        className="myForm"
      >
        <div id="nav-dots" className="nav-dots">
          <div className={section === 1 ? "filled" : null} data-id="1"></div>
          <div className={section === 2 ? "filled" : null} data-id="2"></div>
          <div className={section === 3 ? "filled" : null} data-id="3"></div>
        </div>
        <GeneralPage
          className={section === 1 ? "active" : "hidden"}
          fname={fname}
          lname={lname}
          dob={dob}
          email={email}
          address={address}
          mobile={mobile}
          homePhone={homePhone}
          handleNavChange={this.handleNavigationChange}
        />
        <EducationPage
          className={section === 2 ? "active" : "hidden"}
          educationList={this.state.educationList}
          educationName={educationName}
          qualification={qualification}
          startDate={startDate}
          endDate={endDate}
          handleNavChange={this.handleNavigationChange}
        />
        <ExperiencePage
          className={section === 3 ? "active" : "hidden"}
          experienceList={this.state.experienceList}
          experienceName={experienceName}
          role={role}
          startDate={expStartDate}
          endDate={expEndDate}
          description={expDescription}
          handleNavChange={this.handleNavigationChange}
        />
      </div>
    );
  }

  handleNavigationChange = (whereTo) => {
    this.setState({
      currentlyEditing: "",
      section: whereTo,
    });
  };

  render() {
    const { section } = this.state;

    return (
      <div className="main">

        {this.renderSection()}

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
