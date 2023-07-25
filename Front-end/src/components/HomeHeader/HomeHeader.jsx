import React from "react";
import "./homeHeader.css";

function HomeHeader() {
  
  return (
    <div className="container-fluid home-header">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>
            Welcome to <span>Enigmatica UI</span> Experience
          </h1>
          <h3>
            Enigmatica UI Experience™ introduces a kaleidoscope of abstract
            shapes, pulsating colors, and enigmatic symbols, meticulously
            crafted to confound and mystify users. Each interaction is a cryptic
            puzzle waiting to be deciphered, as buttons vanish into thin air and
            menus materialize from the depths of the digital cosmos.
          </h3>
        </div>
        <div className="col-12 col-md-12 col-lg-6 carousel-side">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1556888335-23631cd2801a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxhbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661765961176-95e74df91e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1670106461988-039155ad1cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
