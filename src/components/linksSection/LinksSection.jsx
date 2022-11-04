import "./linksSection.css";

const LinksSection = () => {
  return (
    <div className="links-section">
      <div>
        <a
          className="btn"
          id=""
          href="https://twitter.com/ADAbdullahi5?t=tgOxqFFb1kOaB0vMEca6HQ&s=09"
        >
          Twitter Link
        </a>
        <a className="btn" id="btn__zuri" href="https://training.zuri.team/">
          Zuri Team
        </a>
        <a className="btn" id="books" href="http://books.zuri.team">
          Zuri Books
        </a>
        <a
          className="btn"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=Abdullahi.js"
        >
          Python Books
        </a>
        <a className="btn" id="pitch" href="https://background.zuri.team">
          Background Check for Coder
        </a>
        <a
          className="btn"
          id="book__design"
          href="https://books.zuri.team/design-rules"
        >
          Design Books
        </a>
        <a className="btn" id="contact" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default LinksSection;
