import React from "react";
import "./homeHeader.css";

import Carousel from "../Carousel/Carousel";

function HomeHeader() {
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
    <div className="container-fluid home-header">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>
            Hello There,
          </h1>
          <h3>
          Welcome to Yalla Tour, your ultimate guide to exploring the captivating beauty and rich history of Iraq! We are thrilled to introduce ourselves and share our passion for connecting travelers with the wonders that this incredible country has to offer.
          </h3>
        </div>
        <div className="col-12 col-md-12 col-lg-6 carousel-side">
        <Carousel
            id="1"
            mainImg={images[0]}
            images={images}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 carousel-side">
        <Carousel
            id="2"
            mainImg={images[0]}
            images={images}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>
          About Us
          </h1>
          <h3>
          At Yalla Tour, we believe that travel is not just about visiting new places; it's about creating unforgettable experiences that open doors to different cultures, traditions, and stories. Our mission is to facilitate your journey through Iraq, making it easier for you to discover the hidden gems and iconic landmarks that define this land of ancient civilizations.          </h3>
        </div>
       
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>
          Our Vision
          </h1>
          <h3>
          Our vision is simple yet powerful: to be your trusted companion in unraveling the mysteries and treasures of Iraq. We envision Yalla Tour as the go-to platform for both seasoned travelers and curious adventurers who wish to explore Iraq's diverse landscapes, delve into its history, and forge connections with its warm-hearted people.          </h3>
        </div>
        <div className="col-12 col-md-12 col-lg-6 carousel-side">
        <Carousel
            id="3"
            mainImg={images[0]}
            images={images}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
