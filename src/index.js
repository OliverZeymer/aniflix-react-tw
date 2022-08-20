import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Themes from "./pages/Themes";
import Contact from "./pages/Contact";
import Anime from "./pages/Anime";
import SingleAnime from "./pages/SingleAnime";
import Search from "./pages/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/singleanime" element={<SingleAnime />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
