import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { setColors } from "./functions/setColors";
import Footer from "./components/Footer";
import searchContext from "./contexts/searchContext";
function App() {
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [theme] = useState(themeLS);
  const [search, setSearch] = useState("");
  if (theme) {
    setColors(theme.primaryColor, theme.textColor);
  }

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      <div className="App">
        <Navbar />
        <div className="w-[85%] mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </searchContext.Provider>
  );
}

export default App;
