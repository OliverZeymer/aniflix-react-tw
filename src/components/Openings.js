import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
const Openings = ({ id }) => {
  const { data } = useFetch(`https://api.jikan.moe/v4/anime/${id}/videos`);

  return (
    <section className="flex flex-col items-center">
      {data?.data ? (
        data.data.music_videos?.map((video) => (
          <iframe
            key={video.video.url}
            src={`${video.video.embed_url} + "&autoplay=0"`}
            id="openingPlayer"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="iframeWindow w-full sm:w-1/2 h-[30vh] mb-12"
          />
        ))
      ) : (
        <Loader />
      )}
      {data?.data && data.data.music_videos.length === 0 && (
        <p className="text-center text-xl sm:text-4xl text-red-600">
          No openings found :(
        </p>
      )}
    </section>
  );
};

export default Openings;
