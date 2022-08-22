import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import Recommendations from "../components/Recommendations";
import useFetch from "../hooks/useFetch";
import { BsChevronDown } from "react-icons/bs";
import Openings from "../components/Openings";
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
        <>
          <div className="md:flex justify-center md:flex-row flex-col md:text-left text-center">
            <img
              className="mx-auto md:mx-0 mb-4 sm:mb-0 w-80 rounded"
              src={singleAnime.images.webp.large_image_url}
              alt={singleAnime.title_english}
            />
            <div className="md:ml-6">
              <h2 className="text-2xl font-semibold">
                <span className="text-yellow-500">★</span> {singleAnime.score}
              </h2>
              <div className="md:flex mb-4">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  {singleAnime.title_english || singleAnime.title}
                </h3>
                <p className=" hidden sm:block text-lg ml-4 mt-1">
                  {singleAnime.type}
                </p>
              </div>
              <p className="capitalize mb-4">
                <span className="font-semibold">Release :</span>{" "}
                {singleAnime.season} {singleAnime.year}
              </p>
              <p className="capitalize mb-4">
                <span className="font-semibold">Genre :</span>{" "}
                {singleAnime.genres.map((genre) => genre.name + ", ")}
              </p>
              <p className="mb-4">
                <span className="font-semibold mb-4">Episodes :</span>{" "}
                {singleAnime.episodes}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Duration :</span>{" "}
                {singleAnime.duration}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Views :</span>{" "}
                {singleAnime.members.toLocaleString()}
              </p>

              <p className="capitalize mb-4">
                <span className="font-semibold">Studio :</span>{" "}
                {singleAnime.studios.map((genre) => genre.name)}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Popularity Rank :</span>{" "}
                {singleAnime.popularity.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold ">Score Rank :</span>{" "}
                {singleAnime.rank.toLocaleString()}
              </p>
            </div>
          </div>

          <ModalButton
            show={modalShow}
            setShow={setModalShow}
            btnValue={
              singleAnime.title_english
                ? "Watch " + singleAnime.title_english + " Trailer"
                : "Watch " + singleAnime.title + " Trailer"
            }
            setModal={setModalImg}
            preview="./assets/img/bluetheme.jpg"
            color="primary-color"
            text="primary-text"
            mx="auto"
            mt="12"
          />
          <div className="mx-auto">
            <h2 className="text-4xl text-center mt-16 mb-8">
              Where to stream:
            </h2>
            {singleAnime.streaming ? (
              singleAnime.streaming?.map((stream) => (
                <a
                  key={stream.name}
                  className="text-center text-3xl"
                  href={stream.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mb-4 font-semibold underline underline-offset-2 hover:scale-110 transition-all">
                    {stream.name}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-center text-lg">
                No streaming available for this anime.
              </p>
            )}
          </div>
          <Modal
            show={modalShow}
            setShow={setModalShow}
            video={singleAnime.trailer.embed_url}
          />
          <div className="mt-20">
            <h4 className="md:text-4xl text-3xl mb-4">Synopsis</h4>
            <p className="">{singleAnime.synopsis}</p>
          </div>
          <button
            onClick={() => setShowOpenings(!showOpenings)}
            className="flex items-center mb-6 mt-24 mx-auto"
          >
            <h3 className=" text-2xl sm:text-4xl">Opening/Ending Songs</h3>
            <BsChevronDown
              className={
                showOpenings
                  ? "transition-all rotate-180 duration-300"
                  : "transition-all rotate-0 duration-300"
              }
              size="30"
            />
          </button>

          {showOpenings && <Openings id={id} />}
          <Recommendations id={id} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SingleAnime;
