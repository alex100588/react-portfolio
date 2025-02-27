import './Projects.css';
import mywork_data from '../../assets/mywork_data.js';

const Projects = () => {
    return ( 
        <div id='projects' className='my-work'>
            <div className="my-work-title">
                <h1>My projects</h1>
            </div>
            <div className="my-work-container">
                {mywork_data.map((work, index)=>{
                    return <img key={index} src={work.w_img} alt='img'/>
                })}
            </div>
            
        </div>
     );
}
 
export default Projects;