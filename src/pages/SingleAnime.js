import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import Recommendations from "../components/Recommendations";
import Streaming from "../components/Streaming";
import useFetch from "../hooks/useFetch";

const SingleAnime = () => {
  const { id } = useParams();
  const [setModalImg] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showStreaming, setShowStreaming] = useState(false);
  const { data } = useFetch("https://api.jikan.moe/v4/anime/" + id);
  let singleAnime = data.data;

  //scroll to top when params change
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowStreaming(false);
  }, [id]);

  return (
    <section className="md:max-w-[80%] mx-auto my-24">
      {singleAnime ? (
        <>
          <div className="md:flex justify-center md:flex-row flex-col md:text-left text-center">
            <img
              className="mx-auto md:mx-0 w-60 rounded"
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

              <p className="capitalize">
                <span className="font-semibold">Studio :</span>{" "}
                {singleAnime.studios.map((genre) => genre.name)}
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
            <button
              onClick={() => setShowStreaming(!showStreaming)}
              className="flex items-center text-4xl sm:gap-4 text-center mx-auto my-8 hover:scale-110 transition-all"
            >
              Where to stream
              <BsChevronDown
                className={
                  !showStreaming
                    ? "transition-transform duration-500 rotate-0 mx-auto sm:mx-0"
                    : "rotate-180 transition-transform duration-500 mx-auto sm:mx-0"
                }
              />
            </button>
            {showStreaming && <Streaming id={id} />}
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
          <Recommendations id={id} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SingleAnime;
