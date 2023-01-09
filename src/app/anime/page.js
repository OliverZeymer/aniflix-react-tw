"use client";
import useFetch from "../../hooks/useFetch";

import { useRouter } from "next/navigation";
import Loader from "../../components/Loader";
let API_URL = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc&status=all`;

export default function AnimePage() {
  const { data, isLoading, error } = useFetch(API_URL);
  const router = useRouter();
  return (
    <main>
      <>
        {!isLoading ? (
          data.data.map((anime) => (
            <div key={anime.mal_id}>
              <h1>{anime.title}</h1>

              <img src={anime.image_url} alt={anime.title} />
            </div>
          ))
        ) : (
          <Loader />
        )}
      </>
    </main>
  );
}

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
