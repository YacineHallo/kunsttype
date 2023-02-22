import React from "react";
import { Route, Routes } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";

import { HomeView } from "./views/homeview/HomeView";
import { Navigatie } from "./components/navigatie/Navigatie";
//import Footer1 from "./components/footer/Footer";
//import { CharacterDetail } from "./views/characterdetail/CharacterDetail";

function App() {
  return (
    <div className="App">
      <Navigatie />
      <Routes>
        <Route element={<HomeView />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
