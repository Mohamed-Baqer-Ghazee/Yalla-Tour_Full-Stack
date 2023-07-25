import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import "./create.css";

const Create = () => {
  const [formType, setFormType] = useState(false);
  const [formLink, setFormLink] = useState(
    "https://localhost:7041/Location/AddLocation"
  );

  const [locData, setLocData] = useState({
    id: 1,
    name: "",
    imgUrl: null,
    description: "",
    address: "",
    type: "",
    oTime: "",
    cTime: "",
    entranceFee: 0,
    rules: "",
    restaurantId: 1,
    tourGuideId: 1,
    images: [],
  });

  const [resData, setResData] = useState({
    name: "",
    imgUrl: "",
    address: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formType) {
      setLocData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setResData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const changeForm = () => {
    setFormType(!formType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = formType ? locData : resData;

    axios
      .post(formLink, formData)
      .then((res) => {
        console.log(res.status);

        if (formType) {
          setLocData({
            id: 1,
            name: "",
            imgUrl: null,
            description: "",
            address: "",
            type: "",
            oTime: "",
            cTime: "",
            entranceFee: 0,
            rules: "",
            restaurantId: 0,
            tourGuideId: 0,
            images: [],
          });
        } else {
          setResData({
            name: "",
            imgUrl: "",
            address: "",
            description: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleArrayInputChange = (event) => {
    const { value } = event.target;
    const valuesArray = value.split("\n");

    if (formType) {
      setLocData((prevData) => ({
        ...prevData,
        images: valuesArray,
      }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container Create">
        <button onClick={changeForm}>
          Change to {formType ? "Restaurant" : "Place"}
        </button>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="imgUrl"
              value={formType ? locData.imgUrl : resData.imgUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>{formType ? "Place Name:" : "Restaurant Name:"}</label>
            <input
              type="text"
              name="name"
              value={formType ? locData.name : resData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formType ? locData.description : resData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formType ? locData.address : resData.address}
              onChange={handleChange}
            />
          </div>
          {formType && (
            <>
              <div className="form-group">
                <label>Type:</label>
                <input
                  type="text"
                  name="type"
                  value={locData.type}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Opening Time:</label>
                <input
                  type="text"
                  name="oTime"
                  value={locData.oTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Closing Time:</label>
                <input
                  type="text"
                  name="cTime"
                  value={locData.cTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Entrance Fee:</label>
                <input
                  type="number"
                  name="entranceFee"
                  value={locData.entranceFee}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Rules:</label>
                <input
                  type="text"
                  name="rules"
                  value={locData.rules}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Images (one link per line):</label>
                <textarea
                  name="images"
                  value={locData.images.join("\n")}
                  placeholder="Enter image URLs (one per line)"
                  onChange={handleArrayInputChange}
                ></textarea>
              </div>
            </>
          )}
          <button type="submit">Create</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
