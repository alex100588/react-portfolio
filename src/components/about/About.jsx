import './About.css';
import me from "../../assets/me.jpg";

const About = () => {
    return ( 
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={me} alt="me" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, modi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width:"80%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p>
                            <hr style={{width:"70%"}} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p>
                            <hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Typescript</p>
                            <hr style={{width:"50%"}} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default About;