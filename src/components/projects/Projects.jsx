import "./Projects.css";
import mywork_data from "../../assets/mywork_data.js";
import { Fragment, useState } from "react";

const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  const toggleOpen = (index) => {
    setOpenProjects((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div id="projects" className="my-work">
      <div className="my-work-title">
        <h1>My projects</h1>
      </div>
      <div className="my-work-container">
        {mywork_data.map((work, index) => {
          const isOpen = openProjects[index];

          return (
            <Fragment key={index}>
              <div className="test">
                <p>{work.w_name}</p>
                <a href={work.adress} target="_blank" rel="noreferrer">
                  <img src={work.w_img} alt="img" />
                </a>
                <div className="text">
                  <div className="clamped-text-container">
                    <p className={`clamped-text ${isOpen ? "expanded" : ""}`}>
                      {work.description}
                    </p>
                    {!isOpen && (
                      <div className="read-more-overlay">
                        <button
                          onClick={() => toggleOpen(index)}
                          className="read-more-btn"
                        >
                          Read more
                        </button>
                      </div>
                    )}
                    {isOpen && (
                      <button
                        onClick={() => toggleOpen(index)}
                        className="read-more-btn"
                        style={{ marginTop: "0.5rem" }}
                      >
                        Read less
                      </button>
                    )}
                  </div>

                  <div className="project-icons">
                    <a href={work.adress} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                      <i className="bi bi-browser-chrome"></i>
                    </a>
                    <a href={work.git} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
