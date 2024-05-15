import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Hjem } from "./components/Hjem";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Kontakt } from "./components/Kontakt";
import { Om } from "./components/Om";
import { Områder } from "./components/Områder";

import { data } from "./data/data.js";

const App = () => {
  const objects = data.property;
  console.log(data)

  return (
    <div className="jkl">
      <div className="header-wrapper">
        <Header />
        <Menu />
      </div>



      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hjem />} />
        <Route path="/om" element={<Om />} />
        <Route path="/objekter" element={<Områder objects={objects} />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
