import React, { Component } from "react";

class CV extends Component {
  constructor(props) {
    super(props);
    this.divStyle = {
      border: "2px solid black",
    };
  }

  render() {
    const { general, education, experience } = this.props;
    const educationArray = Object.values(education);
    const experienceArray = Object.values(experience);



    return (
      <div style={this.divStyle} className="cv">
        {general && (
          <div className="cvHeader cvSub">
            <p className="name">
              {general.fname} {general.lname}
            </p>
            <div className="cvContact">
              <p>{general.address}</p>
              <p>{general.email}</p>
              <p>{general.mobile}</p>
              <p>{general.homePhone}</p>
            </div>
          </div>
        )}

        {educationArray && educationArray.length > 0 && (
          <div className="cvEducation cvSub">
            <h4>Education:</h4>

            {educationArray.map((item, index) => (
              <div key={index} className="cvEducationEntry">
                <p>
                  <h5>{item.educationName}</h5>
                </p>
                <em> {item.qualification}</em>
                <p>
                  {item.startDate} - {item.endDate || "Ongoing"}
                </p>
                <div className="cvDescriptionBlock">{item.description}</div>
              </div>
            ))}
          </div>
        )}

        {experienceArray && experienceArray.length > 0 && (
          <div className="cvExperience cvSub">
            <h4>Experience:</h4>
            {experienceArray.map((item, index) => (
              <div key={index} className="cvExperienceEntry">
                <div className="expDetails">
                  <p>
                    <h5>{item.experienceName}</h5>
                  </p>
                  <em> {item.role}</em>
                  <p>
                    {item.startDate} - {item.endDate || "Current"}
                  </p>
                </div>
                <div className="cvDescriptionBlock">{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CV;
