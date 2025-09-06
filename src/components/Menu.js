import { Tabs, TabList, Tab } from "@fremtind/jkl-tabs-react";
import "@fremtind/jkl-tabs/tabs.min.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-menu/menu.min.css";
import "@fremtind/jkl-icons/icons.min.css";

const pages = [
  { title: "Hjem", path: "/" },
  { title: "Om", path: "/om" },
  { title: "Boligobjekter", path: "/objekter" },
  // { title: "Kontakt oss", path: "/kontakt" },
];

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tabs defaultTab={0} className="jkl-tabs">
        <TabList aria-label="tabs" className="jkl-tablist">
          {pages.map((page) => (
            <Tab key={page.path} className="jkl-tab menu-link">
              <NavLink to={page.path}>{page.title}</NavLink>
            </Tab>
          ))}
        </TabList>
        <div className="hamburger-wrapper">
          <Dropdown>
            <MenuButton>Meny</MenuButton>
            <Menu>
              {pages.map((page) => (
                <MenuItem>
                  <NavLink to={page.path}>{page.title}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Dropdown>
          {/* <div>
            <Hamburger
              aria-controls="jkl-example-menu-placeholder"
              id="jkl-example-hamburger"
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              actionLabel={undefined}
            />
          </div> */}
        </div>
      </Tabs>
    </>
  );
};
