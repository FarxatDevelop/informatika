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
import Theme7 from "./Themes/Theme7/Theme7";
import Theme8 from "./Themes/Theme8/Theme8";
import Theme9 from "./Themes/Theme9/Theme9";
import Theme10 from "./Themes/Theme10/Theme10";

import "./App.css";
import Theme11 from "./Themes/Theme11/Theme11";
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
          <Route path="/theme/8" element={<Theme8 />}></Route>
          <Route path="/theme/9" element={<Theme9 />}></Route>
          <Route path="/theme/10" element={<Theme10 />}></Route>
          <Route path="/theme/11" element={<Theme11 />}></Route>
          <Route path="*" element={<h1>Not page</h1>}></Route>
        </Routes>
        <footer></footer>
      </div>
    </main>
  );
}

export default App;
