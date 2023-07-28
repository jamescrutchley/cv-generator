import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class List extends Component {
  
  render() {
    const { details, section, currentlyEditing, handleUnitRemoval, handleUnitEdit } = this.props;

    return (
        //if / else
      <div className="list">
        <h4>Your {section}:</h4>
        {details.map((item, index) => ( // [{name: '', role: '', ...}, {...}]
        //component for item
        // if exp or education { }

        // if case 1
                 // <Component methods={...} data={{name={item.name}, startDate={item.start}}} }/>

           //else 
                // component data={{...]}}

          <div className="listUnit" key={index}>
            <div className="listUnitButtons">
              <button
                className="border-0"
                onClick={() => handleUnitRemoval(item.id, section.toLowerCase())}
              >
                <Trash />
              </button>
              <button className={(currentlyEditing === item.id) ? 'active editButton' : 'editButton'} onClick={() => handleUnitEdit(item.id, section.toLowerCase())}>
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
            <p className="unitDescription">
                {item.expDescription}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
