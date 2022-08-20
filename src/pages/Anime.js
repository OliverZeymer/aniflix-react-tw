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
import { useState } from "react";
const limit = 24;
const queries = new URLSearchParams(window.location.search);
let currentPage = parseInt(queries.get("page")) || 1;
let orderBy = queries.get("orderBy");
const Anime = () => {
  const handleChange = (event) => {
    window.location.href = `?orderBy=${event.target.value}&page=${currentPage}`;
  };
  let API_URL = `https://api.jikan.moe/v4/anime?order_by=${
    orderBy || "members" || (orderBy === "null" && "members")
  }&sort=desc&limit=${limit}&page=${currentPage}`;
  const { data, loading, error } = useFetch(API_URL);
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <>
      <div>
        <h2 className="text-center heading">Anime</h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = `/search?search=${query}`;
        }}
        className="sm:w-1/3 mx-auto mt-24"
      >
        <label
          htmlFor="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <BsSearch color="gray" size="20" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 outline-none pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
            placeholder="Search Anime..."
            autoComplete="off"
            required
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="w-full justify-center flex-col mt-12 sm:w-1/6 sm:ml-auto flex items-center">
        <label
          htmlFor="filter"
          className="block mb-2 text-xl font-medium text-white"
        >
          Filter by:
        </label>
        <select
          onChange={(event) => handleChange(event)}
          value={orderBy !== null ? orderBy : "members"}
          id="filter"
          className=" border border-gray-300 bg-[#222527] text-white  text-sm rounded-lg focus:ring-white focus:border-white block w-2/4 sm:w-full p-2.5"
        >
          <option value="members">Members</option>
          <option value="score">Score</option>
          <option value="favorites">Favorites</option>
          <option value="episodes">Episodes</option>
          <option value="start_date">Start Date</option>
        </select>
      </div>
      <ul className="mb-1 flex justify-between px-4 sm:px-0 sm:w-1/6 items-center mx-auto">
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?orderBy=${orderBy}&page=${
                currentPage !== 1 ? currentPage - 1 : 1
              }`;
            }}
          >
            <BsFillArrowLeftCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
        <p className="font-semibold">Current Page: {currentPage}</p>
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

      <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
        {loading && <p className="heading">Loading...</p>}
        {error && <p>{error}</p>}
        {data.status && <p>{data.message}</p>}
        {data ? (
          data.data?.map((anime) => (
            <article key={anime.mal_id}>
              <div
                className="card cursor-pointer"
                onClick={() => {
                  window.location.href = `/singleanime?id=${anime.mal_id}`;
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
                    <div className="mt-8">
                      {anime.title_english ? (
                        <h2 className="mb-4 text-3xl">{anime.title_english}</h2>
                      ) : (
                        <h2 className="mb-4 text-3xl">{anime.title}</h2>
                      )}
                      <p className="overflow-hidden h-48 fade-out">
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
              </div>
            </article>
          ))
        ) : (
          <p>No data found</p>
        )}
      </section>
      <ul className="mt-1 flex justify-between px-4 sm:px-0 sm:w-1/6 items-center mx-auto">
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?orderBy=${
                orderBy ? orderBy : "members"
              }&page=${currentPage !== 1 ? currentPage - 1 : 1}`;
            }}
          >
            <BsFillArrowLeftCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
        <p className="font-semibold">Current Page: {currentPage}</p>
        <li>
          <button
            onClick={() => {
              window.location.href = `/anime?orderBy=${
                orderBy ? orderBy : "members"
              }&page=${currentPage + 1}`;
            }}
          >
            <BsFillArrowRightCircleFill size="40" color="var(--primary-text)" />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Anime;
