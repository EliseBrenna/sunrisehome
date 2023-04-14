import MapPNG from "../images/map2.png";

const Map = () => {
  return (
    <div className="map">
      <div
      >
        <div className="pin"></div>
        <div className="pin-name">
          Carboneras
        </div>

        <div className="pin mojacar"></div>
        <div className="pin-name mojacarname">
          Mojácar Playa
        </div>

        <div className="pin garrucha"></div>
        <div className="pin-name garruchaname">
          Garrucha Playa
        </div>

        <div className="pin vera"></div>
        <div className="pin-name veraname">
          Vera
        </div>

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
        <div className="pin-name calapanizoname">
          Cala Panizo
        </div>

        <div className="pin aguilas"></div>
        <div className="pin-name aguilasname">
          Águilas
        </div>

        <div className="pin pulpi"></div>
        <div className="pin-name pulpiname">
          Pulpí
        </div>

        <div className="pin sanjuan"></div>
        <div className="pin-name sanjuanname">
          San Juan de los Terreros
        </div>
      </div>
      <img src={MapPNG} alt="map" className="map-img" />
    </div>
  );
};

export default Map;
