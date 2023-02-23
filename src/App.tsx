import React from "react";
import { Route, Routes } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";
import { HomeView } from "./views/homeview/HomeView";
import { Navigatie } from "./components/navigatie/Navigatie";
import { CharacterDetail } from "./views/characterdetail/CharacterDetailView";
import Footer1 from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigatie />
      <Routes>
        <Route element={<HomeView />} path="/" />
        <Route
          element={
            <CharacterDetail
              id={""}
              name={""}
              status={""}
              species={""}
              type={""}
              gender={""}
              image={""}
              episode={[]}
            />
          }
          path="/characters/:id"
        />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
