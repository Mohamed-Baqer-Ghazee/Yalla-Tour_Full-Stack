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
  <a href={"/place/"+id}>
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
      <p>
        {/* content */}
        {description}
      </p>
    </div>
    <div className="d-flex align-items-center justify-content-between my-1 w-50 mx-auto">
      <p className="m-0">{oTime}</p>
      <p className="m-0">To</p>
      <p className="m-0">{cTime}</p>
    </div>
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
