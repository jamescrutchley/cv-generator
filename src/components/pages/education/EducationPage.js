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

  handleDeleteEntry = (id) => {
    const { currentlyEditing } = this.state;
    const updatedList = this.state.list.filter((item) => item.id !== id);

    this.setState({
      list: updatedList,
      currentlyEditing: id === currentlyEditing ? "" : currentlyEditing,
    },
    () => {
        this.props.updateCvInfo({...updatedList}, 'education');
    });

  };

  getItemBeingEditedDetailsForTheFormInputs = (id) => {
    if (id === "") return null;
    return this.state.list.find(
      (item) => item.id === this.state.currentlyEditing
    );
  };

  handleAddEntry = (entry) => {
    // Everything that hits this component is already validated.

    if (!entry.id) {
      const newEntry = { ...entry, id: uniqid() };
      const updatedList = [...this.state.list, newEntry];

      this.setState({
        list: updatedList,
        currentlyEditing: "",
      },
      () => {
        this.props.updateCvInfo({...updatedList}, 'education');
      });
    } else {
      const updatedList = this.state.list.map((item) =>
        item.id === entry.id ? { ...entry } : item
      );

      this.setState({
        list: updatedList,
        currentlyEditing: "",
      },
      () => {
        this.props.updateCvInfo({...updatedList}, 'education');
      });
      //update existing item.
    }
    this.props.updateCvInfo(this.state.list, 'education');
  };

  render() {
    const { handleNavChange } = this.props;

    return (
      <>
        <div
          className={`${this.props.className} formSection w-100 justify-items-center`}
        >
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
              editItem={this.getItemBeingEditedDetailsForTheFormInputs(
                this.state.currentlyEditing
              )}
            />

            <List
              allData={this.state.list}
              section="Education"
              handleUnitRemoval={this.handleDeleteEntry}
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
