import { useEffect, useState } from "react";
import ResCards from "../components/Cards/ResCards";
import ViewMore from "../components/ViewMoreCard/ViewMore";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Restaurants = () => {
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    const config = {
      method: "get",
      url: "/Restaurant/GetAllRestaurants",
    };

    axios(config)
      .then((res) => setAllData([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-fluid places">
        {allData.map((item, i) => {
            return (
              <ResCards
                key={i}
                name={item.name}
                imgUrl={item.imgUrl}
                address={item.address}
                description={item.description}
              />
            );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Restaurants;
