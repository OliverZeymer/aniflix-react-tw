import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { setColors } from "./functions/setColors";
import Footer from "./components/Footer";
import searchContext from "./contexts/searchContext";
import flipCardsContext from "./contexts/flipCardsContext";
import NewNavbarGangGang from "./components/NewNavbarGangGang";
function App() {
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [theme] = useState(themeLS);
  const [search, setSearch] = useState("");
  const [flipCards, setFlipCards] = useState(true);
  if (theme) {
    setColors(theme.primaryColor, theme.textColor);
  }

  return (
    <flipCardsContext.Provider value={{ flipCards, setFlipCards }}>
      <searchContext.Provider value={{ search, setSearch }}>
        <div className="App">
          <NewNavbarGangGang />
          <div className="w-[85%] mx-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </searchContext.Provider>
    </flipCardsContext.Provider>
  );
}

export default App;
