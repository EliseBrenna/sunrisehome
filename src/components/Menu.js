import { Tabs, TabList } from "@fremtind/jkl-tabs-react";
import { NavLink } from "@fremtind/jkl-core";
import { useState } from "react";
import { Hamburger } from "@fremtind/jkl-hamburger-react";

import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-tabs/tabs.min.css";

const pages = [
  { title: "Hjem", path: "/" },
  { title: "Om", path: "/om" },
  { title: "Boligobjekter", path: "/objekter" },
  { title: "Kontakt oss", path: "/kontakt" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Tabs defaultTab={0} className="jkl-tabs">
      <TabList aria-label="tabs" className="jkl-tablist">
        {pages.map((page) => (
          <NavLink
            key={page.path}
            href={page.path}
            className="jkl-tab menu-link"
          >
            {page.title}
          </NavLink>
        ))}
      </TabList>
      <div className="hamburger-wrapper">
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
      </div>
    </Tabs>
    {/* <div className="flags">
    <Flag code="nor" height="16" />
    <Flag code="es" height="16" />
    </div> */}

    </>
  );
};
