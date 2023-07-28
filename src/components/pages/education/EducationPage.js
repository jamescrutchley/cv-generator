import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class EducationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentlyEditing: "",
    };
  }

  handleEditEntry = (id) => {
    this.setState({
      currentlyEditing: id,
    });
  };

  getItemBeingEditedDetailsForTheFormInputs = (id) => {
    if (id === "")  return null;
    return this.state.list.find((item) => item.id === this.state.currentlyEditing)
  }

  handleAddEntry = (entry) => {
    // Everything that hits this component is already validated.

    console.log(this.state.list)
    if (!entry.id) {
      const newEntry = { ...entry, id: uniqid() };
      const updatedList = [...this.state.list, newEntry];

      this.setState({
        list: updatedList,
        currentlyEditing: "",
      });

    } else {
      const updatedList = this.state.list.map((item) =>
        item.id === entry.id ? { ...entry } : item
      );

      this.setState({
        list: updatedList,
        currentlyEditing: "",
      });
      //update existing item.
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
            <EducationForm
              addEntryMethod={this.handleAddEntry}
              editEntryMethod={this.handleEditEntry}
              editItem={this.getItemBeingEditedDetailsForTheFormInputs(this.state.currentlyEditing)}
            />

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
