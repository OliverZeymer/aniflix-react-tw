import useFetch from "../hooks/useFetch";
import { BsFillPlayFill, BsStarFill, BsArrowRight } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
const Search = () => {
  var limit = 10;
  if (window.innerWidth >= 1900) {
    limit = 24;
  } else if (window.innerWidth <= 1899 && window.innerWidth >= 936) {
    limit = 20;
  } else if (window.innerWidth <= 935) {
    limit = 10;
  }
  const { search } = useParams();
  const API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=${limit}&q=${search}&sfw`;
  const { data, isLoading } = useFetch(API_URL);
  const [query, setQuery] = useState(search);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth >= 640) {
      // load on desktop
      document.getElementsByClassName("search")[0].focus();
    }
  }, []);

  return (
    <>
      <h2 className="text-center heading mt-6 mb-12 capitalize">
        Showing {data.data?.length} results for "{search}"
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/search/" + query);
          if (query === "") {
            navigate("/anime/members/1");
          }
        }}
        className="sm:w-1/3 mx-auto mt-16 mb-16 sm:mb-32"
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
            value={query}
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
      <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
        {isLoading ? (
          <Loader />
        ) : (
          data.data?.map((anime) => (
            <article key={anime.mal_id}>
              <div
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
        )}
      </section>
    </>
  );
};

export default Search;
