import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full flex flex-col items-center ">
        <h2 className="heading">Page not found ☹</h2>

        <p className="font-extrabold text-7xl my-8 text-primary-text">404</p>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
          className="button"
        >
          Back to home
        </motion.button>
        <img
          src="https://cdn.discordapp.com/attachments/629956796802400257/1011701781857833081/sad-naruto.png"
          alt="Page not found"
          className=" w-1/4"
        />
      </div>
    </div>
  );
};

export default NotFound;
