import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Hjem } from "./components/Hjem";
import { Menu } from "./components/Menu";
import { Kontakt } from "./components/Kontakt";
import { Områder } from "./components/Områder";
import { Om } from "./components/Om";
import { PropertyDetails } from "./components/PropertyDetails";
import SunriseLogo from "./images/logo.png";
import { NavLink } from "@fremtind/jkl-core";
import { PropertyProvider } from "./components/PropertyContext";
import { useNavigate } from "react-router-dom";

const App = () => {
  const pages = [
    { title: "Hjem", path: "/" },
    { title: "Om", path: "/om" },
    { title: "Boligobjekter", path: "/objekter" },
    { title: "Kontakt oss", path: "/kontakt" },
  ];

  return (
    <BrowserRouter>
      <main>
        {/* <PropertyProvider> */}
        <header>
          <div className="logo-container">
            <img src={SunriseLogo} alt="Sunrisehomes logo" className="logo" />
          </div>
          <nav>{/* <Menu /> */}</nav>
        </header>
        <div> Siden er under konstruksjon.</div>

        {/* <Routes>
            <Route path="/" element={<Hjem />} />
            <Route path="/om" element={<Om />} />
            <Route path="/objekter" element={<Områder />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>

          <footer>
            <div className="footer-element-content">
              Sunrise Homes <br />
              Haugerudbråtan 17
              <br />
              3408 Tranby <br />
              Org.nr: 929 380 797 <br />
              E-post: post@sunrisehomes.no
            </div>
            <div className="footer-element-content">
              {pages.map((page) => (
                <NavLink
                  key={page.path}
                  href={page.path}
                  className="menu-link-footer"
                >
                  {page.title}
                </NavLink>
              ))}
            </div>
          </footer>
        </PropertyProvider> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
