import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormSection from "../FormSection";
import List from "../List";
import TextareaAutosize from "react-textarea-autosize";



class ExperiencePage extends Component {
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
                value={startDate}
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
                value={endDate}
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
                value={description}
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
              details={experienceList}
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
