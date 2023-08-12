import React from "react";
import "./style.css";

function ResCards(props) {
  const {
    id,
    name,
    imgUrl,
    description,
    address,
    type,
    oTime,
    cTime,
    enteranceFee,
  } = props;

  return (
  <a href={"/place/"+id} className="place-card-link">
  <div className="card-container">
    <div className="card-image">
      {/* imgs */}
      <img src={imgUrl} alt="card-image" className="img-1" />
    </div>
    <div className="card-header">
      <p className="placeName">
        {/* header */}
        {name}
      </p>
    </div>
    <div className="card-content">
      <p className="description">
        {/* content */}
        {description}
      </p>
    </div>
    <br />
    <div className="res-info">
      <p className="m-0">Type: {type}</p>
      <p>Address: {address}</p>
      <p className="m-0">Entrance Fee: {enteranceFee}</p>
    </div>
  </div>
</a>

  );
}

export default ResCards;
