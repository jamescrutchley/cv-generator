import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormSection from "../FormSection";
import List from "../List";

class EducationPage extends Component {
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
