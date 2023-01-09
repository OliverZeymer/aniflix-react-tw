"use client";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsFillPlayFill, BsStarFill, BsArrowRight } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";

import Loader from "../../components/Loader";
let API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&status=all`;

const { data, isLoading, error } = useFetch(API_URL);

const router = useRouter();
const AnimePage = () => {
  return (
    <main>
      <>
        {!isLoading ? (
          <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
            {data?.data?.map((anime) => (
              <motion.article
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "spring", duration: 0.6 }}
                key={anime.mal_id}
                className="card cursor-pointer"
                onClick={() => {
                  router("/anime/" + anime.mal_id);
                }}>
                <div className="card__content">
                  <div className="card__front">
                    <article
                      className="bg-[#222527] relative h-full w-[275px] flex flex-col gap-3 rounded-t-lg rounded-b-sm shadow-lg"
                      key={anime.mal_id}>
                      <img
                        className="max-w-full rounded-t-lg overflow-hidden h-[400px]"
                        src={
                          anime.images.webp.large_image_url
                            ? anime.images.webp.large_image_url
                            : anime.webp_image_url
                        }
                        alt={
                          anime.title_english
                            ? anime.title_english
                            : anime.title
                        }
                      />
                      <div>
                        {anime.title_english ? (
                          <h2
                            title={anime.title_english}
                            className="text-center text-white heading text-lg pt-0 font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {anime.title_english}
                          </h2>
                        ) : (
                          <h2
                            title={anime.title}
                            className="text-center text-white heading text-lg pt-0 font-semibold px-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {anime.title}
                          </h2>
                        )}
                        <h3 className="text-center text-white heading pt-0 text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                          {anime.title_japanese
                            ? anime.title_japanese
                            : anime.title}
                        </h3>
                      </div>
                      <div className="flex justify-between px-4 mb-3">
                        <h4
                          className={
                            anime.score >= 9
                              ? "text-purple-500 bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex items-center"
                              : anime.score >= 8
                              ? "text-green-500 bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex  items-center"
                              : anime.score >= 6.5
                              ? "text-red-white bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex items-center"
                              : "text-red-600 bg-zinc-900 p-2 rounded-xl text-xl gap-1 flex items-center"
                          }>
                          <BsStarFill
                            color={
                              anime.score >= 9
                                ? "#974EDD"
                                : anime.score >= 8
                                ? "#22C55E"
                                : anime.score >= 6.5
                                ? "white"
                                : anime.score > 0
                                ? "#dc2626"
                                : "white"
                            }
                            size="14"
                          />

                          {anime.score ? anime.score.toFixed(2) : "?"}
                        </h4>
                        <p className="bg-zinc-900 px-1 py-2 rounded-xl text-sm text-center m-auto flex items-center gap-1">
                          <BiUser />
                          {anime.members ? anime.members.toLocaleString() : "?"}
                        </p>
                        <p className="bg-zinc-900 p-2 rounded-xl text-xl flex items-center">
                          <BsFillPlayFill />
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
                          {anime.type
                            ? anime.type === "TV"
                              ? "Series"
                              : anime.type
                            : "????"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </section>
        ) : (
          <div className="mx-auto">
            <Loader />
          </div>
        )}
      </>
    </main>
  );
};

export default AnimePage;

/* <AnimeHeading search={search} order={order} status={status} data={data} />
      <SearchBar order={order} status={status} params={params} />
      <SelectFilters params={params} order={order} status={status} />
      <PageNavigation
        page={page}
        data={data}
        limit={limit}
        search={search}
        params={params}
        mb="0"
        mt="8"
      />
      <Toggle />
      <AnimeCard error={error} data={data} isLoading={isLoading} />
      <PageNavigation
        search={search}
        page={page}
        data={data}
        params={params}
        mt="8"
        bottom="true"
        limit={limit}
      /> */
