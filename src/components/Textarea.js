import { useState } from "react";

const Textarea = ({ span, color, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  function focusHandler(event) {
    if (isFocused && value === "") {
      setIsFocused(!isFocused);
    } else {
      setIsFocused(true);
    }
  }
  return (
    <div className={`${span}`}>
      <label className="relative">
        <span
          className={
            isFocused
              ? "text-primary-text font-medium cursor-text absolute ml-3 text-xs transition-all"
              : "text-primary-text font-medium cursor-text text-sm transition-all absolute mt-3 ml-3"
          }
        >
          {label}
        </span>
        <textarea
          className={`placeholder:text-blue-500 rounded-md p-3 resize-none ${color} w-full`}
          cols="30"
          rows="10"
          onChange={(e) => setValue(e.target.value)}
          onFocus={focusHandler}
          onBlur={focusHandler}
        ></textarea>
      </label>
    </div>
  );
};

export default Textarea;
