import { BsArrowUpRight } from "react-icons/bs";
import Slider from "../components/Slider";
import ServicesSection from "../templates/ServicesSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-between my-20">
        <div className="sm:w-2/5">
          <h1 className="text-5xl pt-4 text-primary-text font-bold">
            Subscribe for only 8.99$ a month!
          </h1>
          <p className="my-8 opacity-70 font-bold">
            AniFlix is a streaming service that offers all anime series and
            manga you can think off, we will provide the best service for those
            of you who subscribe to us.
          </p>
          <button class="flex items-center justify-between gap-2 rounded-lg text-xl font-semibold px-6 py-3 border-2 border-primary-color bg-primary-color text-white hover:bg-transparent hover:text-primary-text duration-300">
            Sign Up <BsArrowUpRight className="hover:text-primary-color" />
          </button>
        </div>
        <img className="sm:h-[80vh]" src="./assets/img/levi.png" alt="" />
      </section>

      <section className="my-20">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl pt-4 text-primary-text font-bold my-6">
            Why AniFlix is the best choice?
          </h1>
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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      <ServicesSection />

      <div className="my-20" css={styles.hero}>
        <Slider />
      </div>

      <section className="my-20 flex flex-col items-center">
        <h2 className="text-5xl pt-4 text-primary-text font-bold mb-20">
          Contact us if you have any questions
        </h2>
        <button class="flex items-center justify-between gap-2 rounded-lg text-xl font-semibold px-6 py-3 border-2 border-primary-color bg-primary-color text-white hover:bg-transparent hover:text-primary-text duration-300">
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Home;
