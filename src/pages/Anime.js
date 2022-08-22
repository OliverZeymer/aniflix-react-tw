import useFetch from "../hooks/useFetch";
import {
  BsFillPlayFill,
  BsStarFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsArrowRight,
  BsSearch,
} from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import PageNavigation from "../components/PageNavigation";
const Anime = () => {
  var limit = 10;
  if (window.innerWidth >= 1900) {
    limit = 24;
  } else if (window.innerWidth <= 1899 && window.innerWidth >= 936) {
    limit = 20;
  } else if (window.innerWidth <= 935) {
    limit = 10;
  }
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate(
      `/anime/${
        event.target.value !== null ? event.target.value : "members"
      }/${page}`
    );
  };
  const { order, page } = useParams();
  let API_URL = `https://api.jikan.moe/v4/anime?order_by=${
    order || "members" || (order === "null" && "members")
  }&sort=desc&limit=${limit}&page=${page}&sfw`;
  const { data, isLoading, error } = useFetch(API_URL);
  useEffect(() => {
    if (window.innerWidth >= 640) {
      // load on desktop
      document.getElementsByClassName("search")[0].focus();
    }
  }, []);
  return (
    <>
      <div>
        <h2 className="mt-6 mb-12 text-center heading">Anime Library</h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/search/" + query);
          if (query === "") {
            navigate("/anime/members/1");
          }
        }}
        className="sm:w-1/3 mx-auto mb-8 sm:mb-0 mt-16"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <BsSearch color="white" size="20" />
          </div>
          <input
            type="search"
            id="default-search"
            className="search block p-4 outline-none pl-10 w-full text-sm text-white bg-[#222527] rounded-lg border border-primary-color"
            placeholder="Search Anime..."
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="w-full justify-center flex-col sm:w-1/6 sm:ml-auto flex items-center">
        <label
          htmlFor="filter"
          className="block mb-2 text-xl font-medium text-white"
        >
          Filter by:
        </label>
        <select
          onChange={(event) => handleChange(event)}
          value={order !== null ? order : "members"}
          id="filter"
          className="border border-gray-300 bg-[#222527] text-white mb-8 sm:mb-0 text-sm rounded-lg focus:ring-white focus:border-white block w-2/4 sm:w-full p-2.5"
        >
          <option value="members">Viewers</option>
          <option value="score">Score</option>
          <option value="favorites">Favorites</option>
          <option value="episodes">Episodes</option>
          <option value="start_date">Start Date</option>
        </select>
      </div>
      <ul className="mb-1 flex justify-between px-4 sm:px-0 sm:w-1/3 items-center mx-auto">
        <li>
          <button
            className="hover:scale-125 transition-all"
            onClick={() => {
              navigate(
                `/anime/${order ? order : "members"}/${
                  page >= 2 ? page - 1 : 1
                }`
              );
            }}
          >
            <BsFillArrowLeftCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
        <p className="font-semibold text-center text-2xl">
          Current Page: {page}
        </p>
        <li>
          <button
            className="hover:scale-125 transition-all"
            onClick={() => {
              navigate(
                `/anime/${order ? order : "members"}/${parseInt(page) + 1}`
              );
            }}
          >
            <BsFillArrowRightCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
      </ul>
      <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
        {error && <p>{error}</p>}
        {data.status && <p>{data.message}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          data.data?.map((anime) => (
            <article key={anime.mal_id}>
              <article
                className="card cursor-pointer"
                onClick={() => {
                  navigate("/singleanime/" + anime.mal_id);
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
                        {anime.title_english ? (
                          <h2
                            title={anime.title_english}
                            className="text-center text-white heading text-lg pt-0 font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {anime.title_english}
                          </h2>
                        ) : (
                          <h2
                            title={anime.title}
                            className="text-center text-white heading text-lg pt-0 font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {anime.title}
                          </h2>
                        )}

                        <h3 className="text-center text-white heading pt-0 text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                          {anime.title_japanese}
                        </h3>
                      </div>
                      <div className="flex justify-between px-4 mb-3">
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
                          {anime.score ? anime.score.toFixed(2) : "?"}
                        </h4>
                        <p className="bg-zinc-900 p-2 rounded-xl text-xl flex items-center">
                          <BsFillPlayFill />{" "}
                          {anime.episodes ? anime.episodes : "?"}
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="card__back bg-[#222527] h-full rounded-t-lg flex flex-col justify-between items-center rounded-b-sm">
                    <div className="mt-8">
                      {anime.title_english ? (
                        <h2 className="mb-4 font-semibold text-3xl">
                          {anime.title_english}
                        </h2>
                      ) : (
                        <h2 className="mb-4 text-3xl">{anime.title}</h2>
                      )}
                      <p className="overflow-hidden h-48 px-1 fade-out">
                        {anime.synopsis}
                      </p>
                    </div>
                    <button className="border-2 border-white rounded-full py-2 px-4 flex text-3xl items-center gap-1">
                      Read More <BsArrowRight />
                    </button>
                    <div className="flex flex-col items-center w-full mb-2 px-3">
                      <div className="flex justify-between items-center w-full">
                        <p>Year: {anime.year ? anime.year : "????"}</p>
                        <p className="flex items-center gap-1">
                          <BiUser />
                          {anime.members.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </article>
          ))
        )}
      </section>
      <PageNavigation page={page} order={order} />
    </>
  );
};

export default Anime;
