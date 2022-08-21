import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const Streaming = ({ id }) => {
  const API_URL = `https://api.jikan.moe/v4/anime/${id}/streaming `;
  const { data, isLoading } = useFetch(API_URL);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data.data?.map((stream) => (
          <a
            className="text-center text-3xl"
            href={stream.url}
            target="_blank"
            rel="noreferrer"
          >
            <p className="mb-4 font-semibold underline underline-offset-2 hover:scale-110 transition-all">
              {stream.name}
            </p>
          </a>
        ))
      )}
    </>
  );
};

export default Streaming;
