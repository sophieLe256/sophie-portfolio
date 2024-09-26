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
                  GPA: 3.38
                  <br></br>
                  Award: Dean's List for 1 semesters
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i> 2021 - 2022
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
                <h3 className="qualification__title">
                  <a
                    href="https://github.com/sophieLe256/Tictactoe_game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qualification__link"
                  >
                    Tictactoe game
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  HTML, CSS, Javascript
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i>January 2022
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
                  GPA: 3.58
                  <br></br>
                  Award: President's List for 2 semesters, Dean's List for 1
                  semesters
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i> Spring 2022 - December 2024
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
                <h3 className="qualification__title">
                  <a
                    href="https://github.com/sophieLe256/sophie-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qualification__link"
                  >
                    My Portfolio
                  </a>
                </h3>
                <span className="qualification__subtitle">React</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i>January 2024 - Present
                </div>
              </div>
              <div></div>
              <div>
                <span className="qualification__rounder-2"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://github.com/sophieLe256/sophie-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qualification__link"
                  >
                    Bad Rabbits Shopping Website
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  React, NodeJS, mySQL
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i>August 2023 - November
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
                  <a
                    href="https://github.com/sophieLe256/mobile_final_app_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qualification__link"
                  >
                    Shopping SoleFusion Hub Flutter App
                  </a>
                </h3>
                <span className="qualification__subtitle">Flutter, Dart</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i>August 2023 – December
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
                  <a
                    href="https://github.com/sophieLe256/CSC-SWE-Group3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qualification__link"
                  >
                    TrackTrek - Courier Tracking Website
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  Python, Django, mySQL, Google GPS
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt qualification__calender-icon"></i>January 2024 – April
                  2024
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
