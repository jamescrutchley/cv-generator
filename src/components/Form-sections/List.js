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

    // should be :
    // return a unit w/ edit and delete buttons THEN wrap that around:
    // switch case - general or education or experience for rendering of details.
    // map unique inputs with uniqids(?) for tracking.
  }
}

export default List;

// console.log(details);

// if (!details || details.length < 0) {
//   return (
//     <div className="list">
//       {section} list:
//       <div>Nothing to show.</div>
//     </div>
//   );
// }

// if (section === 'General' && details) {
//     return (
//       <div className="list">
//         <h4>Your details:</h4>
//         {details.map((item, index) => (
//             <div className="listUnit" key={index}>
//                 <p><strong>{item}</strong></p>
//             </div>
//         ))}
//       </div>
//     );
//   }

// return (
//   <div className="list">
//     <h4>Your {section}:</h4>
//     {details.map((item, index) => (
//       <div className="listUnit" key={index}>
//         <div className="listUnitButtons">
//         <button className="border-0" onClick={handleUnitRemoval}><Trash/></button>
//         <button className="border-0" onClick={handleUnitEdit}><Pen/></button>
//         </div>
//         <p><strong>{item.educationName || item.experienceName}</strong></p>
//         <em> {item.qualification || item.role}</em>
//         <p> {item.startDate || item.expStartDate} - {item.endDate || item.expEndDate}</p>
//       </div>
//     ))}
//   </div>
// );
// }
