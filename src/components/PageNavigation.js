import { useNavigate } from "react-router-dom";

const PageNavigation = ({ page, order }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex justify-center mt-8 select-none">
      {page > 2 && (
        <li
          className="h-12 flex items-center justify-center w-12  rounded-full px-5 py-4 cursor-pointer"
          onClick={() => {
            navigate(
              `/anime/${order ? order : "members"}/${parseInt(page) - 2}`
            );
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) - 2}
        </li>
      )}
      {page > 1 && (
        <li
          className="h-12 flex items-center justify-center w-12  rounded-full px-5 py-4 cursor-pointer"
          onClick={() => {
            navigate(
              `/anime/${order ? order : "members"}/${parseInt(page) - 1}`
            );
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {parseInt(page) - 1}
        </li>
      )}

      <li className="h-12 flex items-center justify-center w-12 bg-primary-color px-5 py-3 rounded-full">
        {page}
      </li>
      <li
        className="h-12 flex items-center justify-center w-12  px-5 py-3 rounded-full cursor-pointer"
        onClick={() => {
          navigate(`/anime/${order ? order : "members"}/${parseInt(page) + 1}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {parseInt(page) + 1}
      </li>
      <li
        className="h-12 flex items-center justify-center w-12  px-5 py-3 rounded-full cursor-pointer"
        onClick={() => {
          navigate(`/anime/${order ? order : "members"}/${parseInt(page) + 2}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {parseInt(page) + 2}
      </li>
    </ul>
  );
};

export default PageNavigation;
