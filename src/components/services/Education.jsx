import "./Education.css";
import game2 from "../../assets/game2.png";

const Services = () => {
  return (
    <div id="education" className="my-education">
      <h1>Education</h1>
      <div className="education-title">
        <h1>My Education</h1>
        <img src={game2} alt="licence" />
      </div>
      <div className="certifications">
        <div>
          <h3>Certification 1</h3>
          <img src={game2} alt="" />
        </div>
        <div>
          <h3>Certification 2</h3>
          <img src={game2} alt="" />
        </div>
        <div>
          <h3>Certification 3</h3>
          <img src={game2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
