import "./home.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import LinksSection from "../../components/linksSection/LinksSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <ProfileSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default Home;
