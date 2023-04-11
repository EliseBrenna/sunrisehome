import { NavLink } from "@fremtind/jkl-core";

const pages = [
  { title: "Hjem", path: "/" },
  { title: "Om", path: "/om" },
  { title: "Boligobjekter", path: "/objekter" },
  { title: "Kontakt oss", path: "/kontakt" },
];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-element">
          <div>Kontakt</div>
          <div className="footer-element-content">
            Sunrise Homes <br />
            Haugerudbråtan 17
            <br />
            3408 Tranby <br />
            Org.nr: 929 380 797 <br />
            E-post: post@sunrisehomes.no
          </div>
        </div>
        <div className="footer-element">
          <div>Meny</div>
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
        </div>
      </div>
    </div>
  );
};
