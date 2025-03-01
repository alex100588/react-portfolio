import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "696cb3ec-69c6-4304-b17b-983414276bcd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message + " Thank you for contacting me");
      setInput("");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's talk !</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            voluptas nemo voluptates omnis nobis adipisci fugiat numquam
            corporis quia. Quo.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>alexandru_ionasc@yahoo.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <a href="tel:+0733316975">0733316975</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Romania</p>
            </div>
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/ionasc-alexandru-328a2532b/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/alex100588" target="_blank">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://www.facebook.com/ionasc.gabriel" target="_blank">
                <i class="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            value={input}
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="">Your Email</label>
          <input
            value={input}
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="">Write your message here:</label>
          <textarea
            value={input}
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
