import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { setColors } from "./functions/setColors";
function App() {
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [theme] = useState(themeLS);
  useEffect(() => {
    if (theme) {
      setColors(theme.primaryColor, theme.textColor);
    } else {
      setColors("", "");
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="w-[85%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
