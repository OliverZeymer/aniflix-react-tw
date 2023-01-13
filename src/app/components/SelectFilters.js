import { useSearchParams } from "react-router-dom";
const SelectFilters = ({ status, page, order, search, params }) => {
  /* eslint-disable */
  const [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable */
  const handleOrderChange = (event) => {
    setSearchParams({ ...params, order: event.target.value });
  };
  const handleStatusChange = (event) => {
    setSearchParams({ ...params, status: event.target.value });
  };
  return (
    <div className="w-full justify-center flex-col sm:flex-row gap-8 flex items-center sm:w-1/4 sm:mx-auto">
      <div className="w-full flex flex-col items-center sm:block">
        <label
          htmlFor="filter"
          className="mb-2 sm:mb-0 text-xl font-medium text-white">
          Filter
        </label>
        <select
          onChange={(event) => handleOrderChange(event)}
          value={order ? order : "members"}
          id="filter orderlist"
          className="border border-gray-300 bg-[#222527] text-white mb-4 sm:mb-0 text-sm rounded-lg focus:ring-white focus:border-white block w-2/4 sm:w-full p-2.5">
          <option value="members">Viewers</option>
          <option value="score">Score</option>
          <option value="episodes">Episodes</option>
        </select>
      </div>
      <div className="w-full flex flex-col items-center sm:block">
        <label htmlFor="filter" className="text-xl font-medium text-white">
          Status
        </label>
        <select
          onChange={(event) => handleStatusChange(event)}
          value={status ? status : "all"}
          id="filter statuslist"
          className="border border-gray-300 bg-[#222527] text-white mb-4 sm:mb-0 text-sm rounded-lg focus:ring-white focus:border-white block w-2/4 sm:w-full p-2.5">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="airing">Airing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
    </div>
  );
};

export default SelectFilters;
