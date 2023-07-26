import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";

class EducationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentlyEditing: "",
        }
    }
  render() {
    const {
      educationName,
      qualification,
      startDate,
      endDate,
      currentlyEditing,
      educationList,
      handleNavChange,
    } = this.props;

    return (
      <>
        <div className="formSection w-100 justify-items-center">
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
            

            {/* current list */}
            <List
              details={educationList}
              section="Education"
              handleUnitRemoval={this.handleRemoveEntry}
              handleUnitEdit={this.handleEditEntry}
              currentlyEditing={currentlyEditing}
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
