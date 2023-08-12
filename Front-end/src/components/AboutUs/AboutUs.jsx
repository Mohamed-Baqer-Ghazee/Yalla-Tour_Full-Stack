import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import "./styles.css"

const About = () => {
  return (
    <>
      
          <div className="container-fluid">
      <div className="row row-1">
        <div className="col-12 col-md-12 col-lg-6 about-text">
          <h1>Hello there</h1>
          <h3>
          Welcome to Yalla Tour, your ultimate guide to exploring the captivating
           beauty and rich history of Iraq! We are thrilled to introduce ourselves
            and share our passion for connecting travelers with the wonders that
             this incredible country has to offer.
          </h3>
        </div>
      </div>
      <div className="row row-2">
        <div className="col-12 col-md-12 col-lg-6 about-text">
          <h1>Welcome to the Enigmatica UI Experience™</h1>
          <h3>
            Say goodbye to the mundane world of intuitive user interfaces!
            Enigmatica UI Experience™ embraces the avant-garde, delighting users
            with mind-bending navigation methods. Forget about those predictable
            menu bars and clickable buttons. With Enigmatica, users will be
            challenged to uncover hidden gestures, decipher cryptic
            hieroglyphics, and master the art of quantum touch to unlock the
            secrets of your app.
          </h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
