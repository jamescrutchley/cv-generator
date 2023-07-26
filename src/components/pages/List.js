import React, { Component } from "react";
import { Trash, Pen } from "react-bootstrap-icons";

class List extends Component {
  
  render() {
    const { details, section, currentlyEditing, handleUnitRemoval, handleUnitEdit } = this.props;

    if (section === "General") {
      return (
        <div className="generalList">
          <h4>Your details:</h4>
          {/* ...will always map exactly one item... */}
          {details.map((item, index) => (
            <div className="listUnit general" key={index}>
              <p>
                <strong>
                  <el>Name: </el>
                </strong>
                <em>
                  {item.fname} {item.lname}
                </em>
              </p>
              <p>
                <strong>
                  <el>D/O/B: </el>
                </strong>
                <em>{item.dob}</em>
              </p>
              <p>
                <strong>
                  <el>Email: </el>
                </strong>
                {item.email}
              </p>
              <p>
                <strong>
                  <el>Address: </el>
                </strong>
                {item.address}
              </p>
              <p>
                <strong>
                  <el>Mobile: </el>
                </strong>
                {item.mobile}
              </p>
              <p>
                <strong>
                  <el>Home Phone: </el>
                </strong>
                {item.homePhone}
              </p>
            </div>
          ))}
        </div>
      );
    }

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