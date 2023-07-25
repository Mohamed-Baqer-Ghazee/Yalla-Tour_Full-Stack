import HomeBody from "../components/HomeBody/HomeBody";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <HomeHeader />
        <HomeBody />
      </div>
      <Footer />
    </>
  );
};

export default Home;
