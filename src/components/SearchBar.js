import { BsSearch } from "react-icons/bs";
import { useSearchParams, useNavigate } from "react-router-dom";
const SearchBar = ({ params }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (event.target[0].value === "") {
          navigate("/anime");
          setSearchParams({ ...params, status: "all", search: "" });
        } else {
          setSearchParams({
            ...params,
            search: event.target[0].value,
            page: 1,
            status: "all",
            order: "members",
          });
        }
      }}
      className="sm:w-1/3 h-full mb-8 sm:mx-auto"
    >
      <label
        htmlFor="default-search"
        className="mb-2 sm:mb-0 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <BsSearch color="white" size="20" />
        </div>
        <input
          type="search"
          className="search block p-4 outline-none pl-10 w-full text-sm text-white bg-[#222527] rounded-lg border border-primary-color"
          placeholder="Search Anime..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-primary-color hover:bg-transparent hover:text-primary-text border border-primary-color font-medium rounded-lg transition-all duration-300 text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
