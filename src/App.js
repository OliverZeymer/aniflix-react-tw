import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { setColors } from "./functions/setColors";
import Footer from "./components/Footer";
function App() {
  const themeLS = JSON.parse(window.localStorage.getItem("theme"));
  const [theme] = useState(themeLS);

  if (theme) {
    setColors(theme.primaryColor, theme.textColor);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="w-[85%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
