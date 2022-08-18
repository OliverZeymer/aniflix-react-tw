import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Attack on Titan",
    text: "We offer Full HD Streaming with fast load times!",
    img: "./assets/img/attack-on-titan.jpg",
    color: "text-blue-500",
  },
  {
    title: "Black Clover",
    text: "AniFlix uses high quality servers with high capacity and the least amount of maintenance!",
    img: "./assets/img/black-clover.jpg",
    color: "text-red-800",
  },
  {
    title: "Overlord",
    text: "AniFlix always has the newest released episodes & seasons of your favorite anime shows!",
    img: "./assets/img/overlord.jpg",
    color: "text-yellow-500",
  },
];
const Slider = () => {
  return (
    <section>
      <h2 className="text-5xl text-primary-text text-center font-bold">
        Latest Arrivals:
      </h2>
      <Carousel infiniteLoop interval="3000" autoPlay>
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <h3
              className={`text-3xl mt-6 mb-2 text-center font-bold ${slide.color}`}
            >
              {slide.title}
            </h3>
            <img src={slide.img} className="h-fit" alt="Image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
