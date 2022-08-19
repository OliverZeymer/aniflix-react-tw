import React from "react";
import { Carousel } from "react-responsive-carousel";

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
      <h2 className="heading text-center">Latest Arrivals:</h2>
      <Carousel infiniteLoop interval="3000" autoPlay>
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <h3 className={`heading text-xl sm:text-4xl ${slide.color}`}>
              {slide.title}
            </h3>
            <img src={slide.img} className="h-fit" alt={slide.title} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
