import SunriseJPG from "../images/sunrise2.jpg";
import { NavLink } from "@fremtind/jkl-core";
import { motion } from "framer-motion";

export const Om = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="content">
        <div className="img-container">
          <img src={SunriseJPG} className="img" alt="" />
        </div>
        <div className="content-container">
          <h2>Formidling av eiendom på solens kyst</h2>
          <p className="page-content">
            Ja, med 320 soldager i året velger vi å kalle Spanias østkyst
            nettopp dette. Vi er et norsk selskap som samarbeider med Mojacar
            Estates, en av de mest solide eiendomsmeglere og utbyggere i
            Andalusía/Almería-regionen i Spania. Mojacar Estates tilbyr boliger
            for kjøp og porteføljen inneholder også småbruk og mulighet for kjøp
            av tomt. Innehaver av Sunrise Homes har forøvrig hatt egen leilighet
            i Mojacar siden 2003 og kjenner derfor området meget godt. Med vår
            eksklusive formidlingsavtale med Mojacar Estates ønsker vi norske
            kunder hjertelig velkomne til dette fantastiske området som omtales
            som «The Real Spain» og «A Place In The Sun».
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
    </motion.main>
  );
};
