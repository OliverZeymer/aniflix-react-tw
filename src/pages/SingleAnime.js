import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import SingleAnimeData from "../components/SingleAnimeData";
const SingleAnime = () => {
  const { id } = useParams();
  const [setModalImg] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showOpenings, setShowOpenings] = useState(false);
  const { data } = useFetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  let singleAnime = data.data;
  //scroll to top when params change
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowOpenings(false);
  }, [id]);
  return (
    <section className="md:max-w-[80%] mx-auto my-24">
      {singleAnime ? (
        <SingleAnimeData
          id={id}
          modalShow={modalShow}
          setModalShow={setModalShow}
          setModalImg={setModalImg}
          showOpenings={showOpenings}
          setShowOpenings={setShowOpenings}
          singleAnime={singleAnime}
        />
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SingleAnime;
