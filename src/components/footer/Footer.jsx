import "./footer.css";
import Vector from "../../img/Vector.png";
import I4G from "../../img/I4G.png";
import FooterText from "../../img/Footer_text.png";
import RedDot from "../../img/reddot.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="zuri_logo">
        <img className="reddot" src={RedDot} alt="" />
        <img className="vector" src={Vector} alt="" />
      </div>
      <img className="text" src={FooterText} alt="" />
      <img className="i4g" src={I4G} alt="" />
    </div>
  );
};

export default Footer;
