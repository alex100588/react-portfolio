import "./Projects.css";
import mywork_data from "../../assets/mywork_data.js";
import { Fragment } from "react";

const Projects = () => {
  return (
    <div id="projects" className="my-work">
      <div className="my-work-title">
        <h1>My projects</h1>
      </div>
      <div className="my-work-container">
        {mywork_data.map((work, index) => {
          return (
            <Fragment key={index}>
              <div className="test">
                <p>{work.w_name}</p>
                <a href={work.adress} target="_blank">
                  <img key={index} src={work.w_img} alt="img" />
                </a>
                <div className="text">
                  <p>{work.description}</p>
                
                  <div className="project-icons">
                    <a
                      href={work.adress}
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      <i class="bi bi-browser-chrome"></i>
                    </a>
                    <a href={work.git} target="_blank" style={{ color: "white" }}>
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
