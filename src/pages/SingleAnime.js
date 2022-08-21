import { useState } from "react";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import useFetch from "../hooks/useFetch";
const queries = new URLSearchParams(window.location.search);
const id = queries.get("id");
const API_URL = `https://api.jikan.moe/v4/anime/${id}`;
const API_URL_RECS = `https://api.jikan.moe/v4/anime/${id}/recommendations `;
const SingleAnime = () => {
  const [setModalImg] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const { data } = useFetch(API_URL);
  let singleAnime = data.data;
  const { data: recsData } = useFetch(API_URL_RECS);
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
              singleAnime.title_english + " Trailer" ||
              singleAnime.title + " Trailer" ||
              singleAnime.title_japanese + " Trailer"
            }
            setModal={setModalImg}
            preview="./assets/img/bluetheme.jpg"
            color="primary-color"
            text="primary-text"
            mx="auto"
            mt="12"
          />
          <Modal
            show={modalShow}
            setShow={setModalShow}
            video={singleAnime.trailer.embed_url}
          />
          <div className="mt-20">
            <h4 className="md:text-4xl text-3xl mb-4">Synopsis</h4>
            <p className="">{singleAnime.synopsis}</p>
          </div>
          <section className="my-32 flex flex-col items-center md:grid md:grid-cols-4 lg:grid-cols-5 gap-6">
            <h2 className="md:text-4xl text-3xl mb-4 col-start-1 col-end-6">
              Recommendations for you:
            </h2>
            {recsData.data ? (
              recsData.data
                ?.filter((rec, index) => index < 15)
                .map((anime) => (
                  <article
                    key={anime.entry.mal_id}
                    className="flex flex-col items-center cursor-pointer transform transition duration-200 relative md:p-2 hover:scale-95 hover:text-primary-text"
                    onClick={() => {
                      window.location.href = `/singleanime?id=${anime.entry.mal_id}`;
                    }}
                  >
                    <img
                      className="rounded poster shadow-lg w-[200px] h-[300px]"
                      src={anime.entry.images.webp.large_image_url}
                      alt={anime.entry.title}
                    />
                    <div className="md:ml-6">
                      <p className="text-center p-3 text-sm">
                        {anime.entry.title}
                      </p>
                    </div>
                  </article>
                ))
            ) : (
              <Loader />
            )}
          </section>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SingleAnime;
