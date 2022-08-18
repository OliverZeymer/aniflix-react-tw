import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full flex flex-col items-center ">
        <h2 className="heading">Page not found ☹</h2>

        <p className="font-extrabold text-7xl my-8 text-primary-text">404</p>
        <Link to="/home" className="button">
          Back to home
        </Link>
        <img
          src="./assets/img/sad-naruto.png"
          alt="Page not found"
          className="w-1/4"
        />
      </div>
    </div>
  );
};

export default NotFound;
