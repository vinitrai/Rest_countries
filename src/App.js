import "./App.css";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllCountries from "./pages/AllCountries";
import SingleCountry from "./pages/SingleCountry";
import { useEffect, useState } from "react";

export default function App() {
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [lightMode]);
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="top--bar">
            <h1>Where in the world?</h1>
            <button onClick={() => setLightMode((prev) => !prev)}>
              {lightMode ? <CiDark /> : <MdOutlineLightMode />}{" "}
              {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCountries />}></Route>
            <Route path="/countries/:cname" element={<SingleCountry />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
