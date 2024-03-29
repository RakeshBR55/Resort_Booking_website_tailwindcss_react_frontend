import React from "react";
import "tw-elements";
import bridge from "../../assets/hanging bridge.png";
import yana from '../../assets/yana.jpg'
import viewpoint from '../../assets/viewpoint.jpg'
const Attractions = () => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade md:w-3/4 mx-auto carousel-dark relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded-tl-3xl rounded-br-3xl relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img src={bridge} className="block " alt="Motorbike Smoke" />
          <div className="carousel-caption hidden  backdrop-blur md:block absolute text-center">
            <h5 className="text-3xl  font-bold text-white ">Hanging Bridge</h5>
            <p className="text-white">
              It'll take just 20 km drive to enjoy the great view of the hanging
              bridge
            </p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src={yana}
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src={viewpoint}
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Attractions;
