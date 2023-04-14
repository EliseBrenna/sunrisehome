import MapPNG from "../images/map2.png";
import { NavLink } from "react-router-dom";

const Map = () => {
  return (
    <div className="map">
      <div
      >
        <div className="pin"></div>
        <NavLink className="pin-name" to="/carboneras">
          Carboneras
        </NavLink>

        <div className="pin mojacar"></div>
        <NavLink className="pin-name mojacarname" to="/mojacar">
          Mojácar Playa
        </NavLink>

        <div className="pin garrucha"></div>
        <NavLink className="pin-name garruchaname" to="/garrucha">
          Garrucha Playa
        </NavLink>

        <div className="pin vera"></div>
        <NavLink className="pin-name veraname" to="/vera">
          Vera
        </NavLink>

        {/* <div className="pin cabrera"></div>
        <NavLink className="pin-name cabreraname" to="/cabrera">
          Cabrera
        </NavLink> */}

        {/* <div className="pin losgallardos"></div>
        <NavLink className="pin-name losgallardosname" to="/losgallardos">
          Los Gallardos
        </NavLink> */}

        {/* <div className="pin antas"></div>
        <NavLink className="pin-name aljarizname" to="/aljariz">
          Aljariz
        </NavLink> */}

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
      </div>
      <img src={MapPNG} alt="map" className="map-img" />
    </div>
  );
};

export default Map;
