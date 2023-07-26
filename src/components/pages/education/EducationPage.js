import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";
import EducationForm from "./EducationForm";

class EducationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentlyEditing: "",
    };
  }
  render() {
    const { handleNavChange } = this.props;

    return (
      <>
        <div className="formItem w-100 justify-items-center">
          <h2 className="sectionHeader">Education</h2>
          <Button
            name="back"
            variant="outline-dark"
            onClick={() => handleNavChange(1)}
            className="navButton backButton"
          >
            ←
          </Button>
          <div className="educationSection d-grid">
            
            <EducationForm/>

            <List
              details={this.state.list}
              section="Education"
              handleUnitRemoval={this.handleRemoveEntry}
              handleUnitEdit={this.handleEditEntry}
              currentlyEditing={this.state.currentlyEditing}
            />
            {/* [{...:..., ...:...}, {}] */}
          </div>

          <Button
            onClick={() => handleNavChange(3)}
            variant="outline-dark"
            className="navButton nextButton"
          >
            →
          </Button>
        </div>
      </>
    );
  }
}

export default EducationPage;
