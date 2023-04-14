import { motion } from "framer-motion";
import VillageJPG from "../images/sunrise2.jpg";

export const Kontakt = ({}) => {
  return (
    <main>
      <div className="content">
        <div className="img-container">
          <img className="img" alt="" src={VillageJPG} />
        </div>
        <div className="content-container">
          <h2>Vi vil gjerne høre fra deg</h2>
          <p className="page-content">
            Har du spørsmål eller er du rett og slett bare litt nysgjerrig? Ikke
            nøl med å ta kontakt – helt uforpliktende så klart.
          </p>
          <p>E-post: <a className="reg-link" href="mailto:post@sunrisehomes.no">post@sunrisehomes.no</a></p>
        </div>
      </div>
    </main>
  );
};
