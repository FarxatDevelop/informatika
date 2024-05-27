import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Classes from "./Classes/Classes";
import { Route, Routes } from "react-router-dom";
import Kirisiw from "./Themes/Kirisiw/Kirisiw";
import Theme1 from "./Themes/Theme1/Theme1";
import Theme2 from "./Themes/Theme2/Theme2";
import Theme3 from "./Themes/Theme3/Theme3";
import Theme4 from "./Themes/Theme4/Theme4";
function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Classes />}></Route>
        <Route path="/theme/0" element={<Kirisiw />}></Route>
        <Route path="/theme/1" element={<Theme1 />}></Route>
        <Route path="/theme/2" element={<Theme2 />}></Route>
        <Route path="/theme/3" element={<Theme3 />}></Route>
        <Route path="/theme/4" element={<Theme4 />}></Route>
        <Route path="/theme/5" element={<Kirisiw />}></Route>
        <Route path="/theme/6" element={<Kirisiw />}></Route>
        <Route path="/theme/7" element={<Kirisiw />}></Route>
        <Route path="/theme/8" element={<Kirisiw />}></Route>
        <Route path="/theme/9" element={<Kirisiw />}></Route>
        <Route path="/theme/10" element={<Kirisiw />}></Route>
      </Routes>
    </main>
  );
}

export default App;
