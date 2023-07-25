import React from "react";

function LocCards(props) {
  const { name, imgUrl, address, description } = props;

  return (
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
      <div>
        <p className="m-0">{address}</p>
      </div>
    </div>
  );
}

export default LocCards;
