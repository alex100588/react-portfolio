import "./Education.css";
import licenta from "../../assets/licenta.jpeg";
import game2 from "../../assets/game2.png";

const Services = () => {
  return (
    <>
      <h1 className="h1-design">Education</h1>
      <div id="education" className="my-education">
        <div className="education-title">
          <h1>My Education</h1>
          <img src={licenta} alt="licence" />
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
        </div>
      </div>
      <div className="last-certificate">
        <h3>Certification 3</h3>
        <img src={game2} alt="" />
      </div>
    </>
  );
};

export default Services;
