import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class List extends Component {
  render() {
    const { details, section, handleUnitRemoval, handleUnitEdit } = this.props;

    if (section === 'General') {
        return (
          <div className="list">
            <h4>Your details:</h4>
            {details.map((item, index) => (
              <div className="listUnit" key={index}>
                <p><strong>{item.fname} {item.lname}</strong></p>
                <p>{item.dob}</p>
              </div>
            ))}
          </div>
        );
      }

    return (
      <div className="list">
          <h4>Your {section}:</h4>
        {details.map((item, index) => (
          <div className="listUnit" key={index}>
            <div className="listUnitButtons">
              <button className="border-0" onClick={() => handleUnitRemoval(item.id, section)}>
                <Trash />
              </button>
              <button className="border-0" onClick={handleUnitEdit}>
                <Pen />
              </button>
            </div>
            <p>
              <strong>{item.educationName || item.experienceName }</strong>
            </p>
            <em> {item.qualification || item.role }</em>
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

