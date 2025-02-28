import "./Projects.css";
import mywork_data from "../../assets/mywork_data.js";

const Projects = () => {
  return (
    <div id="projects" className="my-work">
      <div className="my-work-title">
        <h1>My projects</h1>
      </div>
      <div className="my-work-container">
        {mywork_data.map((work, index) => {
          return (
            <>
              <a href={work.adress} target="_blank">
                <img key={index} src={work.w_img} alt="img" />
              </a>
              <div>
                <p>{work.w_name}</p>
                <p>{work.description}</p>
                <a href={work.adress} target="_blank" style={{color:"white"}}>Click to see the project</a><br />
                <a href={work.git} target="_blank" style={{color:"white"}}>Click to see code on Github</a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
