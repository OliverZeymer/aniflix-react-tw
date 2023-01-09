import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      (async function () {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    },
    [url]
  );
  return { data, isLoading, error };
}
