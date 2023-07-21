import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class List extends Component {
  render() {
    const { details, section, handleUnitRemoval, handleUnitEdit } = this.props;

    console.log(details);
    return (
      <div className="list">
          <h4>Your {section}:</h4>
        {details.map((item, index) => (
          <div className="listUnit" key={item.id}>
            <p>Item: {item.id} </p>
            <div className="listUnitButtons">
              <button className="border-0" onClick={(e) => handleUnitRemoval(item.id, section )}>
                <Trash />
              </button>
              <button className="border-0" onClick={handleUnitEdit}>
                <Pen />
              </button>
            </div>
            <p>
              <strong>{item.educationName || item.experienceName || item.fname}</strong>
            </p>
            <em> {item.qualification || item.role || item.dob}</em>
            <p>
              {item.startDate || item.expStartDate} - {item.endDate || item.expEndDate}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;

