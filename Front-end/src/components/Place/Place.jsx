import React from "react";
import "./place.css";
import Carousel from "../Carousel/Carousel";

function Place(placeData) {
  const {name, description, address,imgUrl, images,cTime, oTime, enteranceFee, rules, type}=placeData.place;
  console.log(name);
  return (
    <div className="container-fluid place">
      <div className="row row-1">
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>{name}</h1>
          <h3>
            {description}
          </h3>
          <br/>
          {oTime &&cTime&&  <div className="d-flex align-items-center justify-content-between my-1 w-50 mx-auto">
        <p className="m-0">{oTime}</p>
        <p className="m-0">To</p>
        <p className="m-0">{cTime}</p> 
        
      </div>}
      <div className="res-info">
  <p className="m-0" >Type: {type}</p>
  <p >Address: {address}</p>
  <p className="m-0" >Entrance Fee: {enteranceFee}</p>
</div>
        </div>
        <div className="col-12 col-md-12 col-lg-6  img-side">
          <Carousel
             mainImg={imgUrl} images={images}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Place;
