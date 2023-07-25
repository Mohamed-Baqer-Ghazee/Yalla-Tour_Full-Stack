import React from "react";
import "./homeBody.css";
import Carousel from "../Carousel/Carousel";

function HomeBody() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/d/de/The_ziggurat_at_Aqar_Quf.jpg",
    "https://www.al-monitor.com/sites/default/files/styles/social_media_share/public/almpics/2017/04/Ziggarut.jpg/Ziggarut.jpg?h=f7822858&itok=StTB3AU1",
    "https://www.aljazeera.net/wp-content/uploads/2019/05/14e75b5a-3549-4b7f-a036-ed954ce8d5a6.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/The_Al-Safafir_Market%2C_Baghdad%2C_1930s.png",
    "https://www.ina.iq/uploads/posts/2022-08/upload_1660242118_988838775.jpeg",
    "https://image.radionawa.com/root/root/images/72352018_1.jpg",
    "https://4.bp.blogspot.com/-FMBeOxExlEg/VqUKFoqhgJI/AAAAAAAAA1A/ASCcpv6foxk/s1600/IMG_7712.jpg",
    "https://www.algardenia.com/images/Bagdadyaat/Safafierr.jpg"

  ]
  return (
    <div className="container-fluid home-body">
      <div className="row row-1">
        <div className="col-12 col-md-12 col-lg-6  img-side">
          <Carousel
            id="1"
            mainImg={images[0]}
            images={images}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 text-side">
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
      <div className="row row-2">
        <div className="col-12 col-md-12 col-lg-6 text-side">
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
        <div className="col-12 col-md-12 col-lg-6 img-side">
          <Carousel
            id="2"
            mainImg={images[0]}
            images={images}
          />
        </div>
      </div>
    </div>
  );
}


export default HomeBody;
