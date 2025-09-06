import SunriseJPG from "../images/sunrise2.jpg";
import { NavLink } from "@fremtind/jkl-core";

export const Om = () => {
  return (
    <div className="content">
      <div className="img-container">
        <img src={SunriseJPG} className="img" alt="" />
      </div>
      <div className="content-container">
        <h2>Formidling av eiendom på solens kyst</h2>
        <article className="page-content">
          Med 320 soldager i året velger vi å kalle Spanias østkyst nettopp
          dette.
          <br />
          <br />
          Vi er et norsk selskap som samarbeider med seriøse eiendomsmeglere i
          Mojácar som tilbyr boliger, samt småbruk og tomter for kjøp. Innehaver
          av Sunrise Homes har forøvrig hatt egen leilighet i Mojácar siden 2003
          og kjenner derfor området meget godt.
          <br />
          <br />
          Vi ønsker norske kunder hjertelig velkomne til dette fantastiske
          området som omtales som «The Real Spain» og «A Place In The Sun».
        </article>
        <div className="link-buttons">
          <NavLink href="/objekter" className="link-button">
            Se boligobjekter
          </NavLink>
        </div>
        <div className="contact">
          <h2>Vi vil gjerne høre fra deg</h2>
          <p className="page-content">
            Har du spørsmål eller er du rett og slett bare litt nysgjerrig? Ikke
            nøl med å ta kontakt – helt uforpliktende så klart.
          </p>
          <p>
            E-post:{" "}
            <a className="reg-link" href="mailto:post@sunrisehomes.no">
              post@sunrisehomes.no
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
