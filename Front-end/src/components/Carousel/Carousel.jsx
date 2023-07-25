import React from "react";

function Carousel({ mainImg,images, id }) {
  return (
    <div
      id={`carouselExample${id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={mainImg}
            className="d-block w-100"
            alt="..."
          />
        </div>
        {images.map((image, index) => (
        <div className="carousel-item" key={index}>
          <img 
          src={image} 
          className="d-block w-100"
          alt={`Image ${index + 1}`} />
        </div>
      ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselExample${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExample${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
