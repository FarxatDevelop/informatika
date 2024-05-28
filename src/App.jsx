import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Classes from "./FullThemes/FullThemes";
import Kirisiw from "./Themes/Kirisiw/Kirisiw";
import Theme1 from "./Themes/Theme1/Theme1";
import Theme2 from "./Themes/Theme2/Theme2";
import Theme3 from "./Themes/Theme3/Theme3";
import Theme4 from "./Themes/Theme4/Theme4";
import Theme5 from "./Themes/Theme5/Theme5";
import Theme6 from "./Themes/Theme6/Theme6";

import "./App.css";
import Theme7 from "./Themes/Theme7/Theme7";
function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Classes />}></Route>
          <Route path="/theme/0" element={<Kirisiw />}></Route>
          <Route path="/theme/1" element={<Theme1 />}></Route>
          <Route path="/theme/2" element={<Theme2 />}></Route>
          <Route path="/theme/3" element={<Theme3 />}></Route>
          <Route path="/theme/4" element={<Theme4 />}></Route>
          <Route path="/theme/5" element={<Theme5 />}></Route>
          <Route path="/theme/6" element={<Theme6 />}></Route>
          <Route path="/theme/7" element={<Theme7 />}></Route>
          <Route path="/theme/8" element={<Kirisiw />}></Route>
          <Route path="/theme/9" element={<Kirisiw />}></Route>
          <Route path="/theme/10" element={<Kirisiw />}></Route>
          <Route path="*" element={<h1>Not page</h1>}></Route>
        </Routes>
        <footer></footer>
      </div>
    </main>
  );
}

export default App;
