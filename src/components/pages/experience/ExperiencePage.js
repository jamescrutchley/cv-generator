import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormSection from "../generic/formItem";
import List from "../List";
import TextareaAutosize from "react-textarea-autosize";



class ExperiencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentlyEditing: "",
        }
    }
  render() {
    const {
      experienceName,
      role,
      startDate,
      endDate,
      currentlyEditing,
      experienceList,
      handleNavChange,
      description,
    } = this.props;

    return (
      <>
        <div className="formSection w-100">
          <h2 className="sectionHeader">Experience</h2>
          <Button
            name="back"
            variant="outline-dark"
            onClick={() => handleNavChange(2)}
            className="navButton backButton"
          >
            ←
          </Button>
          <div className="experienceSection">
           

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
      </>
    );
  }
}

export default ExperiencePage;
