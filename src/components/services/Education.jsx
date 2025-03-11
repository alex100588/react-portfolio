import "./Education.css";
import licenta from "../../assets/licenta.jpeg";
import webDevelopment from "../../assets/teachBit.png";
import typescriptCertificate from "../../assets/typescript.png";

const Services = () => {
  return (
    <>
      <h1 className="h1-design">My education</h1>
      <div id="education" className="my-education">
        <div className="education-title">
          <h1>Bachelor's degree</h1>
          <p>
            On my journey I learned the basics of <br /> programming languages, <br />{" "}
            databases an networking fundamentals
          </p>
          <br />
          <img src={licenta} alt="licence" />
        </div>
        <div className="certifications">
          <div className="certificate">
            <h3>Web Development</h3>
            <p>
              The course helped me to improve myself <br /> by learning techical
              skills and soft skills, <br />
              I learned how to put in practice and create  <br /> applications with <br /> Html, Css, Javascript, Bootstrap and React
            </p>
            <br />
            <img src={webDevelopment} alt="web development" />
          </div>
          <div>
            <h3>React with Typescript</h3>
            <p >In the course I learned React <br /> with Typescript and I explored <br /> the Chakra Ui design library</p>
            <img className="cerificate-image" src={typescriptCertificate} alt="typescript" />
          </div>
        </div>
      </div>
      {/* <div className="last-certificate">
        <h3>Certification 3</h3>
        <img src={game2} alt="" />
      </div> */}
    </>
  );
};

export default Services;
