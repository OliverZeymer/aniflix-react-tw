import { useState } from "react";

const InputField = ({ color, type, span, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  function focusHandler(event) {
    if (isFocused && value == "") {
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
        <input
          type={type}
          className={` p-3 w-full rounded-md ${color}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={focusHandler}
          onBlur={focusHandler}
        />
      </label>
    </div>
  );
};

export default InputField;
