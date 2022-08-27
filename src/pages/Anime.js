import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import SearchBar from "../components/SearchBar";
import SelectFilters from "../components/SelectFilters";
import AnimeCard from "../components/AnimeCard";
import AnimeHeading from "../components/AnimeHeading";
import Toggle from "../components/Toggle";

const Anime = () => {
  var limit = 10;
  if (window.innerWidth >= 1905) {
    limit = 24;
  } else if (window.innerWidth <= 1904 && window.innerWidth >= 936) {
    limit = 20;
  } else if (window.innerWidth <= 935) {
    limit = 10;
  }
  const [searchParams, setSearchParams] = useSearchParams();
  var order = searchParams.get("order") || "members";
  var status = searchParams.get("status") || "all";
  var page = searchParams.get("page") || 1;
  var search = searchParams.get("search") || "";
  const params = {
    order: order,
    status: status,
    page: page,
    search: search,
  };
  let API_URL = `https://api.jikan.moe/v4/anime?order_by=${order}&sort=desc&limit=${limit}${
    status && status !== null && status !== "all" ? `&status=${status}` : ""
  }&page=${page}&sfw${search && search !== null ? `&q=${search}` : ""}`;

  const { data, isLoading, error } = useFetch(API_URL);
  useEffect(() => {
    if (window.innerWidth >= 640) {
      document.getElementsByClassName("search")[0].focus();
    }
  }, []);

  return (
    <main>
      <AnimeHeading search={search} order={order} status={status} data={data} />
      <SearchBar order={order} status={status} params={params} />
      <SelectFilters params={params} />
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
      />
    </main>
  );
};

export default Anime;
