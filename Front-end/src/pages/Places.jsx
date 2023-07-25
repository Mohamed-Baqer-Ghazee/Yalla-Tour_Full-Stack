import { useEffect, useState } from "react";
import LocationCards from "../components/Cards/LocationCards";
import ViewMore from "../components/ViewMoreCard/ViewMore";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Places = () => {
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
      url: "/Location/GetAllLocations",
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
              <LocationCards
                key={i}
                id={item.id}
                name={item.name}
                imgUrl={item.imgUrl}
                address={item.address}
                type={item.type}
                oTime={item.oTime}
                cTime={item.cTime}
                description={item.description}
                enteranceFee={item.enteranceFee}
              />
            );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Places;
