import { useSearchParams } from "react-router-dom";

const PageNavigation = ({
  page,
  mb,
  mt,
  data,
  search,
  limit,
  bottom,
  params,
}) => {
  /* eslint-disable */
  const [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable */
  return (
    <ul className={`flex justify-center mt-${mt} mb-${mb} select-none`}>
      {page > 2 && (
        <li
          className="h-12 flex items-center justify-center w-12 rounded-full px-5 py-4 cursor-pointer hover:text-primary-text transition-all"
          onClick={() => {
            setSearchParams({ ...params, page: parseInt(page) - 2 });

            bottom && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) - 2}
        </li>
      )}
      {page > 1 && (
        <li
          className="h-12 flex items-center justify-center w-12  rounded-full px-5 py-4 cursor-pointer hover:text-primary-text transition-all"
          onClick={() => {
            setSearchParams({ ...params, page: parseInt(page) - 1 });

            bottom && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) - 1}
        </li>
      )}

      <li className="h-12 flex items-center justify-center w-12 bg-primary-color px-5 py-3 rounded-full">
        {page}
      </li>
      {data?.data?.length >= limit && (
        <li
          className="h-12 flex items-center justify-center w-12  px-5 py-3 rounded-full cursor-pointer hover:text-primary-text transition-all"
          onClick={() => {
            setSearchParams({ ...params, page: parseInt(page) + 1 });

            bottom && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) + 1}
        </li>
      )}
      {!search && (
        <li
          className="h-12 flex items-center justify-center w-12  px-5 py-3 rounded-full cursor-pointer hover:text-primary-text transition-all"
          onClick={() => {
            setSearchParams({ ...params, page: parseInt(page) + 2 });

            bottom && window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) + 2}
        </li>
      )}
    </ul>
  );
};

export default PageNavigation;
