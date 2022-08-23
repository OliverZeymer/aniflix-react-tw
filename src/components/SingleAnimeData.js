import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import Recommendations from "../components/Recommendations";
import { BsChevronDown } from "react-icons/bs";
import Openings from "../components/Openings";

const SingleAnimeData = ({
  singleAnime: anime,
  id,
  modalShow,
  setModalShow,
  showOpenings,
  setShowOpenings,
}) => {
  return (
    <>
      <div className="md:flex justify-center md:flex-row flex-col md:text-left text-center">
        <img
          className="mx-auto md:mx-0 mb-4 sm:mb-0 w-80 rounded"
          src={
            anime.images.webp.large_image_url
              ? anime.images.webp.large_image_url
              : anime.webp_image_url
          }
          alt={anime.title_english ? anime.title_english : anime.title}
        />
        <div className="md:ml-6">
          <h2 className="text-2xl font-semibold">
            <span className="text-yellow-500">★</span>{" "}
            {anime.score ? anime.score : "?"}
          </h2>
          <div className="md:flex mb-4">
            <h3 className="text-3xl md:text-4xl font-semibold">
              {anime.title_english ? anime.title_english : anime.title}
            </h3>
            <p className=" hidden sm:block text-lg ml-4 mt-1">
              {anime.type ? anime.type : "Unknown"}
            </p>
          </div>
          <p className="capitalize mb-4">
            <span className="font-semibold">Release :</span>{" "}
            {anime.season ? anime.season : "Unknown"},{" "}
            {anime.year ? anime.year : "Unknown"}
          </p>
          <p className="capitalize mb-4">
            <span className="font-semibold">Genre :</span>{" "}
            {anime.genres
              ? anime.genres.map((genre) => genre.name + ", ")
              : "Unknown"}
          </p>
          <p className="mb-4">
            <span className="font-semibold mb-4">Episodes :</span>{" "}
            {anime.episodes ? anime.episodes : "Unknown"}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Duration :</span>{" "}
            {anime.duration ? anime.duration : "Unknown"}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Views :</span>{" "}
            {anime.members ? anime.members.toLocaleString() : "Unknown"}
          </p>

          <p className="capitalize mb-4">
            <span className="font-semibold">Studio :</span>{" "}
            {anime.studios.length > 0
              ? anime.studios.map((genre) => genre.name)
              : "Unknown"}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Popularity Rank :</span>{" "}
            {anime.popularity ? anime.popularity.toLocaleString() : "Unknown"}
          </p>
          <p>
            <span className="font-semibold ">Score Rank :</span>{" "}
            {anime.rank ? anime.rank.toLocaleString() : "Unknown"}
          </p>
        </div>
      </div>
      {anime.trailer.embed_url && (
        <ModalButton
          show={modalShow}
          setShow={setModalShow}
          btnValue={
            anime.title_english
              ? "Watch " + anime.title_english + " Trailer"
              : "Watch " + anime.title + " Trailer"
          }
          color="primary-color"
          text="primary-text"
          mx="auto"
          mt="12"
        />
      )}
      <div className="mx-auto w-fit">
        <h2 className="text-4xl text-center mt-16 mb-8">Where to stream:</h2>
        {anime.streaming ? (
          anime.streaming?.map((stream) => (
            <a
              key={stream.name}
              className="text-center text-3xl"
              href={stream.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="mb-4 font-semibold underline underline-offset-2 hover:scale-110 transition-all text-center">
                {stream.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-center text-xl">
            No streaming available for this anime.
          </p>
        )}
      </div>
      <Modal
        show={modalShow}
        setShow={setModalShow}
        video={anime.trailer.embed_url}
      />
      <div className="mt-20">
        <h4 className="md:text-4xl text-3xl mb-4">Synopsis</h4>
        <p className="leading-7">{anime.synopsis}</p>
      </div>
      <button
        onClick={() => setShowOpenings(!showOpenings)}
        className="hidden sm:flex items-center mb-6 mt-24 mx-auto"
      >
        <h3 className="hidden sm:block text-2xl sm:text-4xl">
          Show Opening/Ending Songs (WIP)
        </h3>
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
  );
};

export default SingleAnimeData;
