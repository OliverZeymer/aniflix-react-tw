import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {
  BsFillPlayFill,
  BsStarFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
const limit = 24;
const queries = new URLSearchParams(window.location.search);
let currentPage = parseInt(queries.get("page")) || 1;
let API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=${limit}&page=${currentPage}`;
const Anime = () => {
  const { data, loading, error } = useFetch(API_URL);
  return (
    <>
      <h2 className="heading">Anime</h2>
      <ul className="flex justify-between w-1/6 items-center mx-auto mt-12">
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?page=${currentPage - 1}`;
            }}
          >
            <BsFillArrowLeftCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?page=${currentPage + 1}`;
            }}
          >
            <BsFillArrowRightCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
      </ul>
      <section className="grid grid-cols-auto-fit gap-4 w-full">
        {loading && <p className="heading">Loading...</p>}
        {error && <p>{error}</p>}
        {data.status && <p>{data.message}</p>}
        {data &&
          data.data?.map((anime) => (
            <article
              onClick={() => {
                window.location.href = `/singleanime?anime=${anime.title_english}&page=${currentPage}`;
              }}
              className="bg-[#222527] relative h-full flex flex-col gap-3 rounded-t-lg rounded-b-sm shadow-lg hover:scale-110 hover:opacity-50"
              key={anime.mal_id}
            >
              <img
                className="max-w-full rounded-t-lg overflow-hidden h-[400px]"
                src={anime.images.webp.large_image_url}
                alt={`${anime.title_english} Cover Art`}
              />
              <div>
                <h2
                  title={anime.title_english}
                  className="text-center text-white heading text-lg font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {anime.title_english}
                </h2>
                <h3 className="text-center text-white heading pt-0 text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                  {anime.title_japanese}
                </h3>
              </div>
              <div className="flex justify-between px-10 mb-3">
                <h4
                  className={
                    anime.score > 9
                      ? "text-purple-500 bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex items-center"
                      : anime.score > 8
                      ? "text-green-500 bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex  items-center"
                      : "text-white bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex items-center"
                  }
                >
                  <BsStarFill
                    color={
                      anime.score > 9
                        ? "#974EDD"
                        : anime.score > 8
                        ? "#22C55E"
                        : "white"
                    }
                    size="14"
                  />
                  {anime.score}
                </h4>
                <p className="bg-zinc-900 p-2 rounded-xl text-xl flex items-center">
                  <BsFillPlayFill /> {anime.episodes ? anime.episodes : "?"}
                </p>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};

export default Anime;
