import { BsArrowUpRight } from "react-icons/bs";
import Slider from "../components/Slider";
import ServicesSection from "../templates/ServicesSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
const styles = {
  hero: css`
    .slide img {
      user-select: none;
      max-height: 70vh;
    }
    .carousel .thumbs-wrapper {
      margin: 0;
    }
    .sliderHeading {
      top: 50%;
      left: 200px;
      right: 10%;
      color: var(--primary-text);
      font-size: 4rem;
      max-width: 100%;
      user-select: none;
      font-weight: 700;
    }
    .carouselLink {
      text-decoration: underline;
    }
    .carousel .control-dots {
      position: relative;
    }
    .carousel .control-dots .dot {
      border-radius: 100px;
      width: 40px;
      height: 15px;
      background-color: var(--primary-text);
      border: 1px solid black;
    }
    .carousel .thumb {
      display: none;
    }
    .carousel-status {
      display: none;
    }
    .carousel .control-dots .dot.selected {
      opacity: 1;
    }
    .carousel .control-dots .dot {
      box-shadow: none;
    }

    .carousel.carousel-slider {
      max-width: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: column-reverse;
    }
    .carousel.carousel-slider .control-arrow {
      top: 68px;
      bottom: 40px;
    }
  `,
};
const Home = () => {
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [theme, setTheme] = useState(themeLS);
  console.log(theme);
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-between my-20">
        <div className="sm:w-2/5">
          <h1 className="heading">Subscribe for only 8.99$ a month!</h1>
          <p className="my-8 opacity-70 font-bold">
            AniFlix is a streaming service that offers all anime series and
            manga you can think off, we will provide the best service for those
            of you who subscribe to us.
          </p>
          <button className="button">
            Sign Up <BsArrowUpRight className="hover:text-primary-color" />
          </button>
        </div>

        <img
          className="sm:h-[80vh]"
          src={
            theme.primaryColor === "blue"
              ? "./assets/img/rem.png"
              : theme.primaryColor === "red"
              ? "./assets/img/kaneki.png"
              : theme.textColor === "white"
              ? "./assets/img/killua.png"
              : "./assets/img/levi.png"
          }
          alt="Landing page"
        />
      </section>

      <section className="my-20">
        <div className="flex justify-between items-center">
          <h1 className="heading my-6">Why AniFlix is the best choice?</h1>
          <p className="w-[30%] font-bold opacity-70">
            Watch this one minute video to find out why you should use AniFlix!
          </p>
        </div>
        <iframe
          className="w-full h-[80vh] rounded-sm"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eeZ1Ufdra0E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <ServicesSection />

      <div className="my-20" css={styles.hero}>
        <Slider />
      </div>

      <section className="my-20 flex flex-col items-center">
        <h2 className="heading mb-20">Contact us if you have any questions</h2>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
      </section>
    </>
  );
};

export default Home;
