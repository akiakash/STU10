import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";

import { AllGallery } from "./components/AllGallery";
import AllImages from "./components/AllImages";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/allgallery" element={<AllGallery />}></Route>
          <Route path="/allimages" element={<AllImages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
