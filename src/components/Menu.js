import { Tabs, TabList, Tab } from "@fremtind/jkl-tabs-react";
import "@fremtind/jkl-tabs/tabs.min.css";
import { NavLink } from "react-router-dom";

const pages = [
  { title: "Hjem", path: "/" },
  { title: "Om", path: "/om" },
  { title: "Boligobjekter", path: "/objekter" },
  // { title: "Kontakt oss", path: "/kontakt" },
];

export const Menu = () => {
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
        {/* <div className="hamburger-wrapper">
          <div>
            <Hamburger
              aria-controls="jkl-example-menu-placeholder"
              id="jkl-example-hamburger"
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              actionLabel={undefined}
            />
          </div>
          {pages.map((page) => (
            <NavLink
              className="hamburger-menu-items"
              id="jkl-example-menu-placeholder"
              aria-labelledby="jkl-example-hamburger"
              role="group"
              hidden={!isOpen}
              href={page.path}
            >
              {page.title}
            </NavLink>
          ))}
        </div> */}
      </Tabs>
    </>
  );
};
