import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import GeneralForm from "./generalForm";
import ListItem from "../generic/listItem";

class GeneralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  handleAddInfo = (newInfo) => {
    this.setState({
      info: newInfo,
    });
  };

  render() {
    const { handleNavChange } = this.props;
    return (
      <>
        <div className={`formSection ${this.props.className}`}>
          <h2 className="sectionHeader">General Info</h2>
          <div className="generalSection">
            <GeneralForm addInfoMethod={this.handleAddInfo} />
            <div className="list generalList">
              <h4>Your Info:</h4>
              <div className="listUnit">
                <ListItem data={this.state.info} />
              </div>
            </div>
          </div>
          <Button
            variant="outline-dark"
            onClick={() => handleNavChange(2)}
            className="navButton nextButton"
          >
            →
          </Button>
        </div>
      </>
    );
  }
}
export default GeneralPage;
