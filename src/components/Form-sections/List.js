import React, { Component } from "react";
import { Trash, Pen } from 'react-bootstrap-icons';


class List extends Component {
  render() {
    const { details, section, handleUnitRemoval, handleUnitEdit } = this.props;
    console.log(details);

    if (!details || details.length < 0) {
      return (
        <div className="list">
          {section} list:
          <div>Nothing to show.</div>
        </div>
      );
    }

    if (section === 'General' && details) {
        return (
          <div className="list">
            <h4>Your details:</h4>
            {details.map((item, index) => (
                <div className="listUnit" key={index}>
                    <p><strong>{item}</strong></p>
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
            <button className="border-0" onClick={handleUnitRemoval}><Trash/></button>
            <button className="border-0" onClick={handleUnitEdit}><Pen/></button>
            <p><strong>{item.educationName || item.experienceName}</strong></p>
            <em> {item.qualification || item.role}</em>
            <br />
            <p> {item.startDate || item.expStartDate} - {item.endDate || item.expEndDate}</p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
