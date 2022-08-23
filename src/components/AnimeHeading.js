import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import searchContext from "../contexts/searchContext";
import { motion } from "framer-motion";

const AnimeHeading = ({ search, order, status, data }) => {
  const navigate = useNavigate();
  const { setSearch } = useContext(searchContext);
  return (
    <>
      {search !== "none" || undefined ? (
        <motion.div
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="flex items-center justify-center"
        >
          <BsArrowLeft
            size="50"
            className="text-primary-text cursor-pointer hover:scale-125 transition-all"
            onClick={() => {
              navigate(`/anime/${order}/${status}/1/none`);
              setSearch("");
            }}
          />
          <h2
            initial={{ x: -800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="text-center heading mt-6 mb-12 capitalize"
          >
            Showing {data.data?.length} results for "{search}"
          </h2>
        </motion.div>
      ) : (
        <h2 className="mt-6 mb-12 text-center heading">Anime Library</h2>
      )}
    </>
  );
};

export default AnimeHeading;
