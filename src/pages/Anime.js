import useFetch from "../hooks/useFetch";
import {
  BsFillPlayFill,
  BsStarFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsArrowRight,
} from "react-icons/bs";
const limit = 24;
const queries = new URLSearchParams(window.location.search);
let currentPage = parseInt(queries.get("page")) || 1;
let orderBy = queries.get("orderBy");
console.log(orderBy);
const Anime = () => {
  const handleChange = (event) => {
    window.location.href = `?orderBy=${event.target.value}&page=${currentPage}`;
  };
  let API_URL = `https://api.jikan.moe/v4/anime?order_by=${
    orderBy || "members"
  }&sort=desc&limit=${limit}&page=${currentPage}`;

  const { data, loading, error } = useFetch(API_URL);

  return (
    <>
      <h2 className="heading">Anime</h2>
      <label
        htmlFor="filter"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Filter by:
      </label>
      <div className="mb-24 w-1/6">
        <select
          onChange={(event) => handleChange(event)}
          value={orderBy}
          id="filter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="members">Members</option>
          <option value="score">Score</option>
          <option value="favorites">Favorites</option>
          <option value="episodes">Episodes</option>
          <option value="start_date">Start Date</option>
        </select>
      </div>
      <ul className="flex justify-between w-1/6 items-center mx-auto mt-12">
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?orderBy=${orderBy}&page=${
                currentPage + -1
              }`;
            }}
          >
            <BsFillArrowLeftCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?orderBy=${orderBy}&page=${
                currentPage + 1
              }`;
            }}
          >
            <BsFillArrowRightCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
      </ul>

      <section className="grid grid-cols-auto-fit gap-6 w-full">
        {loading && <p className="heading">Loading...</p>}
        {error && <p>{error}</p>}
        {data.status && <p>{data.message}</p>}
        {data &&
          data.data?.map((anime) => (
            <>
              <div
                className="card cursor-pointer"
                onClick={() => {
                  window.location.href = `/singleanime?anime=${anime.title_english}&page=${currentPage}`;
                }}
              >
                <div className="card__content">
                  <div className="card__front">
                    <article
                      className="bg-[#222527] relative h-full w-[275px] flex flex-col gap-3 rounded-t-lg rounded-b-sm shadow-lg"
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
                          className="text-center text-white heading text-lg pt-0 font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis"
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
                          <BsFillPlayFill />{" "}
                          {anime.episodes ? anime.episodes : "?"}
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="card__back bg-[#222527] h-full rounded-t-lg flex flex-col justify-between items-center rounded-b-sm">
                    <div>
                      <h2 className="mb-4">{anime.title_english}</h2>
                      <p className="overflow-hidden h-24 fade-out">
                        {anime.synopsis}
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <div className="flex justify-between items-center w-full">
                        <p>Year: {anime.year}</p>
                        <p>{anime.members.toLocaleString()}</p>
                      </div>
                      <h3 className="flex items-center gap-1">
                        Read More <BsArrowRight />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </section>
    </>
  );
};

export default Anime;
