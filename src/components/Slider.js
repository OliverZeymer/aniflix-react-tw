import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Attack on Titan",
    img: "./assets/img/attack-on-titan.jpg",
    color: "text-blue-500",
    id: "48583",
  },
  {
    title: "Black Clover",
    img: "./assets/img/black-clover.jpg",
    color: "text-red-800",
    id: "34572",
  },
  {
    title: "Overlord",
    img: "./assets/img/overlord.jpg",
    color: "text-yellow-500",
    id: "48895",
  },
  {
    title: "Dragon Ball Z",
    img: "./assets/img/dragon-ball-z.jpg",
    color: "text-[#FC842A]",
    id: "813",
  },
];
const Slider = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="heading text-center">Latest Arrivals:</h2>
      <Carousel infiniteLoop interval="2000" autoPlay>
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <h3
              className={`heading text-2xl sm:text-4xl underline mb-1 cursor-pointer ${slide.color}`}
              onClick={() => {
                navigate("/singleanime/" + slide.id);
              }}
            >
              {slide.title}
            </h3>
            <img alt="slide" src={slide.img} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
