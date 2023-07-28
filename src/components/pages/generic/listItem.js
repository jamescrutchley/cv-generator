import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class ListItem extends Component {
  render() {
    const { methods, data, currentlyEditing } = this.props;

    const { id, ...dataWithoutId } = data;
    let valuestoRender = Object.values(dataWithoutId).filter(
      (item) => item !== ""
    );

    // for general info - no methods necessary.
    if (!methods) {
      return valuestoRender.map((value, index) => {
        return <p key={index}>{value}</p>;
      });
    }

    return (
      <div className="listUnit">
        <div className="listUnitButtons">
          <button className="border-0" onClick={() => methods.edit()}>
            <Trash />
          </button>
          <button
            className={
              currentlyEditing === data.id ? "active editButton" : "editButton"
            }
            onClick={() => methods.edit(data.id)}
          >
            <Pen />
          </button>
        </div>
        {valuestoRender.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
    );
  }
}

export default ListItem;
