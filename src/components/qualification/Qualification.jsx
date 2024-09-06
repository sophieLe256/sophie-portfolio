import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">My Qualification</h2>
      <span className="section__subtitle">My personel journey </span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-clipboard-alt qualification_icon"></i>
            Projects
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Perimeter College</h3>
                <span className="qualification__subtitle">
                  Computer Science
                  <br></br>
                  GPA:
                  <br></br>
                  Award:
                </span>
                
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder-1"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
            <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Tictactoe game</h3>
                <span className="qualification__subtitle">HTML, CSS, Javascript</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>January 2022
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Georgia State University
                </h3>
                <span className="qualification__subtitle">
                  Computer Science
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021- Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX/UI</h3>
                <span className="qualification__subtitle">
                  Georgia State University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021- Present
                </div>
              </div>

              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX/UI</h3>
                <span className="qualification__subtitle">
                  Georgia State University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021- Present
                </div>
              </div>

              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX/UI</h3>
                <span className="qualification__subtitle">
                  Georgia State University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021- Present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Georgia State University
                </h3>
                <span className="qualification__subtitle">
                  Computer Science
                  <br></br>
                  GPA:
                  <br></br>
                  Award:
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder-1"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
            <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">My Portfolio</h3>
                <span className="qualification__subtitle">React</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>January 2024 - Present
                </div>
              </div>
              <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bad Rabbits Shopping Website</h3>
                <span className="qualification__subtitle">
                  React, NodeJS, mySQL
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>August 2023 - November
                  2023
                </div>
              </div>

              <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Shopping SoleFusion Hub Flutter App
                </h3>
                <span className="qualification__subtitle">Flutter, Dart</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>August 2023 –
                  December 2023
                </div>
              </div>

              <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              

              <div>
                <h3 className="qualification__title">
                  TrackTrek - Courier Tracking Website
                </h3>
                <span className="qualification__subtitle">
                  Python, Django, mySQL, Google GPS
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>January 2024 –
                  April 2024
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
