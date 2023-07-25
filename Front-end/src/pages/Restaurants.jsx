import { useEffect, useState } from "react";
import ResCards from "../components/Cards/ResCards";
import ViewMore from "../components/ViewMoreCard/ViewMore";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Restaurants = () => {
  const [allData, setAllData] = useState([]);
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(false);

  const showData = () => {
    setCounter(allData.length - 1);
    setShow(true);
  };

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
          if (i === counter - 1 && !show) {
            return <ViewMore onClick={showData} key={i} />;
          }
          if (i < counter)
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
