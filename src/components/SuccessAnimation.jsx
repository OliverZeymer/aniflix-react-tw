/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  successanimation: css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    transition: opacity 2s;
    z-index: 9;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(5px);
    .progress .color {
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--primary-color);
      width: 0px;
      height: 0.5vh;
      animation: progres 3s infinite linear;
    }
    @keyframes progres {
      0% {
        width: 0%;
      }
      25% {
        width: 50%;
      }
      50% {
        width: 75%;
      }
      75% {
        width: 85%;
      }
      100% {
        width: 100%;
      }
    }
    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: var(--primary-color);
      fill: none;
      background-color: black;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    .checkmark {
      width: 112px;
      height: 112px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: var(--primary-text);
      stroke-miterlimit: 10;
      margin: 0 auto;
      box-shadow: inset 0px 0px 0px black;
      animation: fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
    }
    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
    .successMessage {
      color: var(--primary-text);
      margin-top: 0.5rem;
      font-size: 2rem;
      text-align: center;
    }
    @keyframes stroke {
      100% {
        stroke-dashoffset: 0;
      }
    }
    @keyframes scale {
      0%,
      100% {
        transform: none;
      }
      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    @keyframes fill {
      100% {
        box-shadow: inset 0px 0px 0px 60px black;
      }
    }
  `,
};

const SuccessAnimation = () => {
  const [animationDone, setAnimationDone] = useState(false);
  setTimeout(() => {
    setAnimationDone(true);
  }, 900);
  return (
    <div className="wrapper" css={styles.successanimation}>
      <div class="progress">
        <div class="color"></div>
      </div>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />{" "}
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      {animationDone && (
        <p className="successMessage">
          Message sent! We'll be in touch soon &#128540;
        </p>
      )}
    </div>
  );
};

export default SuccessAnimation;
