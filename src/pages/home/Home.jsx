import "./home.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import LinksSection from "../../components/linksSection/LinksSection";
import Footer from "../../components/footer/Footer";
import SocialSection from "../../components/socialSection/SocialSection";

const Home = () => {
  return (
    <div className="home">
      <ProfileSection />
      <LinksSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Home;
