import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaceComponent from "../components/Place/Place";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

const Place = () => {
  const {placeId} = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (placeId) {
          // Fetch the place details from the backend API based on the placeId
          const response = await axios.get(`/Location/GetLocationById?id=${placeId}`);
          console.log(response.data);
          setPlace(response.data);
        }
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="place">
        {place ? <PlaceComponent place={place} /> : <div>Loading...</div>}
      </div>
      <Footer />
    </>
  );
};

export default Place;
