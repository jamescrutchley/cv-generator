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
      cvInfo: {
        general: {},
        education:{},
        experience: {}
      }
    };
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  renderSection() {
    const { section } = this.state;

    return (
      <div className="myForm">
        <div id="nav-dots" className="nav-dots">
          <div className={section === 1 ? "filled" : null} data-id="1"></div>
          <div className={section === 2 ? "filled" : null} data-id="2"></div>
          <div className={section === 3 ? "filled" : null} data-id="3"></div>
        </div>
        <GeneralPage
          className={section === 1 ? "active" : "hidden"}
          handleNavChange={this.handleNavigationChange}
          updateCvInfo={this.updateCvInfo}
        />
        <EducationPage
          className={section === 2 ? "active" : "hidden"}
          handleNavChange={this.handleNavigationChange}
          updateCvInfo={this.updateCvInfo}
        />
        <ExperiencePage
          className={section === 3 ? "active" : "hidden"}
          handleNavChange={this.handleNavigationChange}
          updateCvInfo={this.updateCvInfo}
        />
      </div>
    );
  }

  updateCvInfo = (newInfo, sectionName) => {
    
    this.setState(prevState => ({
        cvInfo: {
          ...prevState.cvInfo,
          [sectionName]: newInfo
        }
      }))
  }

  handleNavigationChange = (whereTo) => {
    this.setState({
      currentlyEditing: "",
      section: whereTo,
    });
  };

  render() {
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

        <CV
          general={this.state.cvInfo.general}
          education={this.state.cvInfo.education}
          experience={this.state.cvInfo.experience}
        />
      </div>
    );
  }
}

export default Main;
