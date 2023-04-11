import MapPNG from "../images/map2.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className="map">
      {/* <motion.div
        className="pins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="pin"></div>
        <NavLink className="pin-name" to="/carboneras">
          Carboneras
        </NavLink>

        <div className="pin mojacar"></div>
        <NavLink className="pin-name mojacarname" to="/mojacar">
          Mojácar
        </NavLink>

        <div className="pin garrucha"></div>
        <NavLink className="pin-name garruchaname" to="/garrucha">
          Garrucha
        </NavLink>

        <div className="pin vera"></div>
        <NavLink className="pin-name veraname" to="/vera">
          Vera
        </NavLink>

        <div className="pin cabrera"></div>
        <NavLink className="pin-name cabreraname" to="/cabrera">
          Cabrera
        </NavLink>

        <div className="pin losgallardos"></div>
        <NavLink className="pin-name losgallardosname" to="/losgallardos">
          Los Gallardos
        </NavLink>

        <div className="pin antas"></div>
        <NavLink className="pin-name aljarizname" to="/aljariz">
          Aljariz
        </NavLink>

        <div className="pin calapanizo"></div>
        <NavLink className="pin-name calapanizoname" to="/calapanizo">
          Cala Panizo
        </NavLink>

        <div className="pin aguilas"></div>
        <NavLink className="pin-name aguilasname" to="/aguilas">
          Águilas
        </NavLink>

        <div className="pin pulpi"></div>
        <NavLink className="pin-name pulpiname" to="/pulpi">
          Pulpí
        </NavLink>

        <div className="pin sanjuan"></div>
        <NavLink className="pin-name sanjuanname" to="/sanjuan">
          San Juan de los Terreros
        </NavLink>
      </motion.div> */}
      <img src={MapPNG} alt="map" className="map-img" />
    </div>
  );
};

export default Map;
