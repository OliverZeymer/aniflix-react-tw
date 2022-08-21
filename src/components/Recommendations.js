import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Recommendations = ({ id }) => {
  const API_URL = `https://api.jikan.moe/v4/anime/${id}/recommendations`;
  const { data } = useFetch(API_URL);
  const navigate = useNavigate();
  return (
    <>
      {data ? (
        data.data
          ?.filter((rec, index) => index < 15)
          .map((anime) => (
            <article
              key={anime.entry.mal_id}
              className="flex flex-col items-center cursor-pointer transform transition duration-200 relative md:p-2 hover:scale-95 hover:text-primary-text"
              onClick={() => {
                navigate("/singleanime/" + anime.entry.mal_id);
              }}
            >
              <img
                className="rounded poster shadow-lg w-[200px] h-[300px]"
                src={anime.entry.images.webp.large_image_url}
                alt={anime.entry.title}
              />
              <div className="md:ml-6">
                <p className="text-center p-3 text-sm">{anime.entry.title}</p>
              </div>
            </article>
          ))
      ) : (
        <h4 className="heading text-2xl text-center">No results :(</h4>
      )}
    </>
  );
};

export default Recommendations;
