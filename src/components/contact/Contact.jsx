import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    return ( 
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h3>Let's talk !</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptas nemo voluptates omnis nobis adipisci fugiat numquam corporis quia. Quo.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" />
                            <p>alexandru_ionasc@yahoo.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call" />
                            <p>0733316975</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location" />
                            <p>Romania</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Write your message here:</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;