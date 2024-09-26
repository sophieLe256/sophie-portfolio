import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-book about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Georgia State University</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-time-five about__icon"></i>
        <h3 className="about__title">Available</h3>
        <span className="about__subtitle">Open to Opportunities</span>
      </div>
    </div>
  );
};

export default Info;
