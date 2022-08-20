import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
const limit = 24;
const queries = new URLSearchParams(window.location.search);
const currentPage = queries.get("page");
const API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=${limit}&page=${currentPage}`;

const SingleAnime = () => {
  const anime = queries.get("anime");
  const { data, loading, error } = useFetch(API_URL);
  let singleAnime = data.data?.find(
    (element) => element.title_english === anime
  );
  console.log(singleAnime);
  return (
    <section>
      {singleAnime && (
        <>
          <h2>{singleAnime.title_english}</h2>
          <h3>{singleAnime.title_japanese}</h3>
          <img
            src={singleAnime.images.webp.large_image_url}
            alt={singleAnime.title_english}
          />
          <p>{singleAnime.synopsis}</p>
          <p>{singleAnime.score}</p>
          <a target="_blank" href={singleAnime.url}>
            MAL Link
          </a>
          <p>
            Aired: {""}
            {singleAnime.aired.prop.from.year} -{" "}
            {singleAnime.aired.prop.to.year}
          </p>
          <p>{singleAnime.licensors[0].name}</p>
          <p>
            Producers:
            {singleAnime.producers.map((producers) => " " + producers.name)}
          </p>
          <p>Viewers: {singleAnime.members}</p>
          <p>
            Genres:
            {singleAnime.genres.map((genres) => " " + genres.name)}
          </p>

          <iframe
            width="470"
            height="315"
            src={singleAnime.trailer.embed_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      )}
    </section>
  );
};

export default SingleAnime;
