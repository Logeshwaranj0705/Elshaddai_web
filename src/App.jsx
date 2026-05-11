import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Carousal.css";

import Navbar from "./components/Navbar";
import NavbarCar from "./components/NavbarCar";
import ScrollProgress from "./components/ScrollProgress";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import Carousal from "./pages/Carousal";

export default function App() {
  const location = useLocation();

  const isCarouselPage = location.pathname === "/";

  return (
    <>
      {!isCarouselPage && <ScrollProgress />}

      {isCarouselPage ? <NavbarCar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Carousal />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}