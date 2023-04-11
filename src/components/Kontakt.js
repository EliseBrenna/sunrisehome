import { motion } from "framer-motion";
import VillageJPG from "../images/sunrise2.jpg";

export const Kontakt = ({}) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
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
          <p>E-post: post@sunrisehomes.no</p>
        </div>
      </div>
    </motion.main>
  );
};
