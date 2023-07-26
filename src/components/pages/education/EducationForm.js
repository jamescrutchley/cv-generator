import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FormSection from "../generic/formItem";


class EducationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                educationName: "",
                qualification: "",
                startDate: "",
                endDate: "",
                description: "",
              },
        }
    }

  render() {
    return (
      <Form>
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
      </Form>
    );
  }
}

export default EducationForm;
