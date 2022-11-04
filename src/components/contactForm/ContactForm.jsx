import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="heading">
        <span>Contact Me</span>
        <span>
          Hi there, contact me to ask me about anything you have in mind.
        </span>
      </div>
      <form>
        <div className="names">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="name">
            <label htmlFor="">Last Name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <label htmlFor="">Email</label>
        <input id="email" type="email" placeholder="yourname@gmail.com" />
        <label htmlFor="">Message</label>
        <textarea
          name="textarea"
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible.."
        ></textarea>
        <div className="checkbox">
          <input type="checkbox" />
          <p>
            You agree to providing your data to Abdullahi which may contact you
          </p>
        </div>
        <button id="btn_submit">Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;
