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

    return <div 
    style={this.divStyle}
    className="cv">
        <div className="cvHeader cvSub">
           <p className="name">{general.fname} {general.lname}</p>
           <div className="cvContact">
                <p>{general.address}</p>
                <p>{general.email}</p>
                <p>{general.mobile}</p>
                <p>{general.homePhone}</p>
           </div>

        </div>
        <div className="cvEducation cvSub">
            <h4>Education:</h4>

        {education.map((item, index) => (
            <div key={index} className="cvEducationEntry">
                <p>
                <h5>{item.educationName}</h5>
                </p>
                <em> {item.qualification}</em>
                <p>
                {item.startDate} - {item.endDate || 'Ongoing'}
                </p>
            </div>
        ))}
        </div>

        <div className="cvExperience cvSub">
            <h4>Experience:</h4>
            {experience.map((item, index) => (
            <div key={index} className="cvExperienceEntry">
                <div className="expDetails">
                    <p>
                    <h5>{item.experienceName}</h5>
                    </p>
                    <em> {item.role}</em>
                    <p>
                    {item.expStartDate} - {item.expEndDate || 'Ongoing'}
                    </p>
                </div>
                <div className="cvDescriptionBlock">
                    {item.expDescription}
                </div>
            </div>
        ))}
        </div>
    </div>;
  }
}

export default CV;
