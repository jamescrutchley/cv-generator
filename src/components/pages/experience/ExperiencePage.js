import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";
import TextareaAutosize from "react-textarea-autosize";
import ExperienceForm from "./ExperienceForm";



class ExperiencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentlyEditing: "",
        }
    }
  render() {
    const { handleNavChange } = this.props;

    return (
      <>
        <div className="formItem w-100">
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

            <ExperienceForm/>
        
            {/* Current list */}
            <List
              details={this.state.list}
              section="Experience"
              handleUnitEdit={this.handleEditEntry}
              handleUnitRemoval={this.handleRemoveEntry}
              currentlyEditing={this.state.currentlyEditing}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ExperiencePage;
