import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import List from "../List";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

class ExperiencePage extends Component {
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

  // This seems clunky
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
    }

  };

  render() {
    const { handleNavChange } = this.props;

    return (
      <>
        <div className={`formSection ${this.props.className}`}>
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
            <ExperienceForm
              addEntryMethod={this.handleAddEntry}
              editEntryMethod={this.handleEditEntry}
              editItem={this.getItemBeingEditedDetailsForTheFormInputs(this.state.currentlyEditing)}
              
            />

            {/* Current list */}
            <List
              details={this.state.list}
              section="Experience"
              handleUnitEdit={this.handleEditEntry}
              handleUnitRemoval={this.handleRemoveEntry}
              currentlyEditing={this.state.currentlyEditing !== "" ? this.state.currentlyEditing : null}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ExperiencePage;
