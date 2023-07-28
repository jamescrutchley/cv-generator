import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class ListItem extends Component {
  render() {
    const { methods, data } = this.props;

    let values = Object.values(data).filter((item) => item !== "");

    // no methods - must be for general info.
    if (!methods) {
      return values.map((value, index) => {
        return <p key={index}>{value}</p>;
      });
    }

    return (
      <div className="listUnit" key={index}>
        <div className="listUnitButtons">
          <button
            className="border-0"
            onClick={() => handleUnitRemoval(item.id, section.toLowerCase())}
          >
            <Trash />
          </button>
          <button
            className={
              currentlyEditing === item.id ? "active editButton" : "editButton"
            }
            onClick={() => handleUnitEdit(item.id, section.toLowerCase())}
          >
            <Pen />
          </button>
        </div>
        <p>
          <strong>{item.educationName || item.experienceName}</strong>
        </p>
        <em> {item.qualification || item.role}</em>
        <p>
          {item.startDate || item.expStartDate} -{" "}
          {item.endDate || item.expEndDate}
        </p>
        <p className="unitDescription">{item.expDescription}</p>
      </div>
    );
  }
}

export default ListItem;
