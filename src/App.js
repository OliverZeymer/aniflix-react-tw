import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { setColors } from "./functions/setColors";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "./components/Footer";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
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
