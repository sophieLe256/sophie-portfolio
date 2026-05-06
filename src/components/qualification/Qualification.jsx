import React, { useMemo, useState } from "react";
import "./qualification.css";

const qualificationTabs = [
  {
    key: "experience",
    label: "Experience",
    icon: "uil uil-briefcase-alt",
  },
  {
    key: "education",
    label: "Education",
    icon: "uil uil-graduation-cap",
  },
  {
    key: "certifications",
    label: "Certifications",
    icon: "uil uil-award",
  },
  {
    key: "projects",
    label: "Projects",
    icon: "uil uil-clipboard-alt",
  },
];

const qualificationContent = {
  experience: [
    {
      badge: "CG",
      eyebrow: "Capgemini",
      title: "Associate Application Consultant",
      subtitle: "Full-time",
      description:
        "Supporting enterprise delivery engagements in a hybrid consulting environment with a focus on cloud-forward solutions, collaboration, and dependable application support.",
      dates: "Feb 2026 - Present",
      location: "Nashville, Tennessee, United States · Hybrid",
      tags: ["Google Cloud Platform (GCP)", "C&CA", "Additional consulting skills"],
    },
  ],
  education: [
    {
      badge: "PC",
      eyebrow: "Perimeter College",
      title: "Computer Science",
      subtitle: "Associate studies",
      dates: "2021 - 2022",
      details: ["GPA: 3.38", "Award: Dean's List for 1 semester"],
    },
    {
      badge: "GSU",
      eyebrow: "Georgia State University",
      title: "Computer Science",
      subtitle: "Bachelor's studies",
      dates: "Spring 2022 - December 2024",
      details: [
        "GPA: 3.58",
        "Award: President's List for 2 semesters, Dean's List for 1 semester",
      ],
    },
  ],
  certifications: [
    {
      badge: "MS",
      eyebrow: "Microsoft",
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Cloud certification",
      dates: "Issued May 2026",
      details: ["Credential ID: F7E597DAC5A25A42"],
      tags: ["Cloud Computing", "Microsoft Azure"],
    },
  ],
  projects: [
    {
      badge: "PF",
      eyebrow: "Featured project",
      title: "My Portfolio",
      subtitle: "React",
      dates: "January 2024 - Present",
      link: "https://github.com/sophieLe256/sophie-portfolio",
      description:
        "A personal portfolio built to showcase experience, technical skills, and selected projects with a responsive React interface.",
    },
    {
      badge: "BR",
      eyebrow: "Web application",
      title: "Bad Rabbits Shopping Website",
      subtitle: "React, NodeJS, mySQL",
      dates: "August 2023 - November 2023",
      link: "https://github.com/sophieLe256/Web-project",
      description:
        "An e-commerce experience exploring product browsing, shopping flows, and full-stack collaboration.",
    },
    {
      badge: "SF",
      eyebrow: "Mobile application",
      title: "Shopping SoleFusion Hub Flutter App",
      subtitle: "Flutter, Dart",
      dates: "August 2023 - December 2023",
      link: "https://github.com/sophieLe256/mobile_final_app_project",
      description:
        "A mobile shopping app concept created with Flutter to deliver a smooth browsing and checkout experience.",
    },
    {
      badge: "TT",
      eyebrow: "Team project",
      title: "TrackTrek - Courier Tracking Website",
      subtitle: "Python, Django, mySQL, Google GPS",
      dates: "January 2024 - April 2024",
      link: "https://github.com/sophieLe256/CSC-SWE-Group3",
      description:
        "A courier tracking platform focused on shipment visibility, routing context, and collaborative delivery workflows.",
    },
  ],
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const activeItems = useMemo(
    () => qualificationContent[activeTab] || [],
    [activeTab]
  );

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle">
        Experience, education, certifications & projects
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs" role="tablist" aria-label="Resume sections">
          {qualificationTabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                className={`qualification__button button--flex ${
                  isActive ? "qualification__active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.key}`}
                id={`tab-${tab.key}`}
              >
                <i className={`${tab.icon} qualification__icon`}></i>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="qualification__surface">
          <div
            className="qualification__content qualification__content-active"
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="qualification__timeline">
              {activeItems.map((item, index) => (
                <article
                  className="qualification__entry"
                  key={`${activeTab}-${item.title}`}
                  style={{ "--item-index": index }}
                >
                  <div className="qualification__marker" aria-hidden="true">
                    <span className="qualification__marker-badge">{item.badge}</span>
                  </div>

                  <div className="qualification__card">
                    <div className="qualification__card-header">
                      <div>
                        <span className="qualification__eyebrow">{item.eyebrow}</span>
                        <h3 className="qualification__title">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="qualification__link"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                      </div>
                    </div>

                    {item.description ? (
                      <p className="qualification__description">{item.description}</p>
                    ) : null}

                    {item.details?.length ? (
                      <ul className="qualification__details">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}

                    {item.tags?.length ? (
                      <div className="qualification__tags" aria-label="Related skills">
                        {item.tags.map((tag) => (
                          <span className="qualification__tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="qualification__meta">
                      <span className="qualification__meta-item">
                        <i className="uil uil-calendar-alt qualification__meta-icon"></i>
                        {item.dates}
                      </span>

                      {item.location ? (
                        <span className="qualification__meta-item">
                          <i className="uil uil-map-marker qualification__meta-icon"></i>
                          {item.location}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
