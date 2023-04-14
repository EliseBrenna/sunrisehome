import SunriseJPG from "../images/sunrise2.jpg";
import { NavLink } from "@fremtind/jkl-core";

export const Om = () => {
  return (
    <main>
      <div className="content">
        <div className="img-container">
          <img src={SunriseJPG} className="img" alt="" />
        </div>
        <div className="content-container">
          <h2>Formidling av eiendom på solens kyst</h2>
          <p className="page-content">
            Ja, med 320 soldager i året velger vi å kalle Spanias østkyst
            nettopp dette. Vi er et norsk selskap som samarbeider med seriøse
            eiendomsmeglere i Mojácar som tilbyr boliger, samt småbruk og tomter
            for kjøp. Innehaver av Sunrise Homes har forøvrig hatt egen
            leilighet i Mojácar siden 2003 og kjenner derfor området meget godt.
            Vi ønsker norske kunder hjertelig velkomne til dette fantastiske
            området som omtales som «The Real Spain» og «A Place In The Sun».
          </p>
          <div>
            <NavLink href="/objekter" className="link-button">
              Se boligobjekter
            </NavLink>
            <NavLink href="/kontakt" className="link-button">
              Kontakt oss
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};
