import { useContext } from "react";
import flipCardsContext from "../contexts/flipCardsContext";
const Toggle = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);
  return (
    <div className="mx-auto flex items-center justify-center mt-4 sm:mx-0 sm:block sm:mt-0 w-fit">
      <label htmlFor="checked-toggle" className=" relative items-center cursor-pointer select-none">
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          className="sr-only peer"
          checked={flipCards}
          onClick={() => {
            setFlipCards(!flipCards);
          }}
        />
        <div className="mx-auto sm:mx-0 w-11 h-6 bg-[#222527] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[15px] sm:after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="text-sm font-medium text-white">Flip Cards</span>
      </label>
    </div>
  );
};

export default Toggle;
