import useFetch from "../hooks/useFetch";
import { BsFillPlayFill, BsStarFill, BsArrowRight } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const queries = new URLSearchParams(window.location.search);
var searchParams = queries.get("search");
console.log(searchParams);
const API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=24&q=${searchParams}`;
const Search = () => {
  const { data } = useFetch(API_URL);
  console.log(data);
  return (
    <>
      <h2 className="text-center heading mt-6 mb-12 capitalize">
        Showing results for "{searchParams}"!
      </h2>
      <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
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
    </>
  );
};

export default Search;
