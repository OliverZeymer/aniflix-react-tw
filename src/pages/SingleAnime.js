import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SingleAnimeData from "../components/SingleAnimeData";
const SingleAnime = () => {
  const { id } = useParams();
  const [setModalImg] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showOpenings, setShowOpenings] = useState(false);
  const { data, error, isLoading } = useFetch(
    `https://api.jikan.moe/v4/anime/${id}/full`
  );
  let singleAnime = data.data;
  //scroll to top when params change
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowOpenings(false);
  }, [id]);
  return (
    <SingleAnimeData
      data={data}
      id={id}
      modalShow={modalShow}
      setModalShow={setModalShow}
      setModalImg={setModalImg}
      showOpenings={showOpenings}
      setShowOpenings={setShowOpenings}
      singleAnime={singleAnime}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default SingleAnime;
