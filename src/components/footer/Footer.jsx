import "./footer.css";
import Vector from "../../img/Vector.png";
import I4G from "../../img/I4G.png"
const Footer = () => {
  return (
    <div className="footer">
      <img src={Vector} alt="" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={I4G} alt="" />
    </div>
  )
}

export default Footer
