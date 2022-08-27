import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const AnimeHeading = ({ search, data }) => {
  /* eslint-disable */
  const [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable */
  return (
    <>
      {search ? (
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
              setSearchParams({ search: "" });
              document.querySelector(".search").value = "";
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
        <motion.h2
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mt-6 mb-12 text-center heading"
        >
          Anime Library
        </motion.h2>
      )}
    </>
  );
};

export default AnimeHeading;
