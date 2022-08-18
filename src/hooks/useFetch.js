import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    (async function () {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  return { data, isLoading, error };
}
