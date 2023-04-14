import SunriseLogo from "../images/logo.png";
import { motion, useScroll } from "framer-motion";

export const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="header">
      <img src={SunriseLogo} alt="logo" className="logo" />
      <div className="header-ingress">Investering i sol og varme på Spanias østkyst</div>
    </div>
  );
};
