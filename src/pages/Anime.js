import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import PageNavigation from "../components/PageNavigation";
import SearchBar from "../components/SearchBar";
import SelectFilters from "../components/SelectFilters";
import AnimeCard from "../components/AnimeCard";
import AnimeHeading from "../components/AnimeHeading";
import Toggle from "../components/Toggle";

const Anime = () => {
  const [flipCards, setFlipCards] = useState();
  var limit = 10;
  if (window.innerWidth >= 1905) {
    limit = 24;
  } else if (window.innerWidth <= 1904 && window.innerWidth >= 936) {
    limit = 20;
  } else if (window.innerWidth <= 935) {
    limit = 10;
  }

  const { order, status, page, search } = useParams();
  let API_URL = `https://api.jikan.moe/v4/anime?order_by=${
    order || "members" || (order === "null" && "members")
  }&sort=desc&limit=${limit}&status=${
    status || "members" || (status === "null" && "complete")
  }&page=${page}${search !== "none" || undefined ? `&q=${search}` : ""}&sfw`;
  const { data, isLoading, error } = useFetch(API_URL);
  useEffect(() => {
    if (window.innerWidth >= 640) {
      document.getElementsByClassName("search")[0].focus();
    }
  }, []);
  return (
    <main>
      <AnimeHeading search={search} order={order} status={status} data={data} />
      <div className="flex-grow"></div>
      <SearchBar order={order} status={status} />
      <SelectFilters
        status={status}
        page={page}
        order={order}
        search={search}
      />

      <PageNavigation
        status={status}
        page={page}
        order={order}
        search={search}
        mb="0"
        mt="8"
      />
      <Toggle flipCards={flipCards} setFlipCards={setFlipCards} />
      <section className="sm:grid sm:grid-cols-auto-fit flex flex-col gap-6 w-full h-fit">
        {error && <p>{error}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <AnimeCard flipCards={flipCards} data={data} />
        )}
      </section>
      <PageNavigation
        status={status}
        page={page}
        order={order}
        search={search}
        mt="8"
        bottom="true"
      />
    </main>
  );
};

export default Anime;
