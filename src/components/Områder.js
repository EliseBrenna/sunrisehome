import { NavCard } from "@fremtind/jkl-card-react";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

import "@fremtind/jkl-card/card.min.css";

export const Områder = ({ objects }) => {
  const [value, setValue] = useState("Mojacar");
  const [showModal, setShowModal] = useState(undefined);

  const propertyTown = objects.map((property) => {
    return property.town;
  });

  const noDuplicates = [...new Set(propertyTown)];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="content">
        <div className="select-wrapper">
          <label className="select-label">Velg et boligområde</label>
          <select
            className="select"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {noDuplicates.map((town, id) => {
              return (
                <>
                  <option value={town} disabled selected hidden>
                    {value}
                  </option>
                  <option key={id} value={town}>
                    {town}
                  </option>
                </>
              );
            })}
          </select>
          {value === "Mojacar" ? (
            <div className="area-description">
              Mojacar ligger ved Middelhavet på Spania`s østkyst, litt nord for
              Almeria og i underkant av 300 km fra Malaga og 225 km fra
              Alicante. Mojacar er på listen over de vakreste landsbyene i
              Spania. Gamlebyen Mojacar ligger oppe på et lite fjell og husene
              klamrer seg til fjellet som hvite svalereir. Utsikten ned mot
              havet er meget vakker og stemningen er magisk. Byen har en lang
              historisk betydning og vi anbefaler at du går inn på mojacar.es.
              Likeledes som det anbefales at dere går inn på Youtube og søker
              etter Mojacar der man finner flere flotte presentasjonsfiler om
              Mojacar og områdene omkring. Det oser av historisk hygge og
              opprinnelighet og den gamle byen oppe i «puebloen» har vært bebodd
              siden bronsjealderen 2000 år, f. Kristus. Siden kom fønikerne,
              kartagerne, grekere, romerne og araberne. Etter andre verdenskrig
              og frem til og med 60-tallet tilbød myndighetene folk gratis hus
              til dem som hadde lyst til å slå seg ned og renovere husene. Det
              strømmet kunstnere og musikere til stedet og byen fikk raskt et
              kunstnerpreg, et preg stedet fremdeles har i dag. John Lennon i
              «The Beatles» fant også veien til områdene på 60-tallet og i
              Almeria er det reist en stor statue av Beatles-legenden der han
              blant annet komponerte mesterverket «Strawberry Fields Forever».
              Sjøl fant vi Sunrisehomes.no veien til Mojacar og de omliggende
              majestetiske områdene for 20 år sien der vi ennå opplever nye
              magiske øyeblikk som balsa for kropp og sjel – Velkommen til
              Sunrisehomes.no til våre spennende områder som omtales som «Det
              Virkelige Spania», «En Plass i Solen» og stedet for «Det Gode
              Liv».
            </div>
          ) : null}
          <div className="area-content">
            {objects.map((property, id) => {
              if (value === property.town) {
                let type =
                  property.type === "Apartment"
                    ? "Leilighet"
                    : property.type === "Land"
                    ? "Tomt"
                    : property.type === "Town House"
                    ? "Rekkehus"
                    : property.type === "Commercial"
                    ? "Leilighet"
                    : property.type === "Country House"
                    ? "Landssted"
                    : property.type === "Village House"
                    ? "Landsbyhus"
                    : property.type === "Penthouse"
                    ? "Toppleilighet"
                    : property.type;
                return (
                  <>
                    <NavCard
                      className="jkl-nav-card"
                      padding="m"
                      key={property.id}
                      title={type}
                      description={`€${property.price}`}
                      onClick={() => setShowModal(id)}
                    >
                      <div className="sections">
                        <div className="modal-section">
                          Baderom: {property.baths}
                        </div>

                        <div className="modal-section">
                          Soverom: {property.beds}
                        </div>
                      </div>

                      <div className="nav-card-img-container">
                        <img
                          className="nav-card-img"
                          src={property.images.image[0].url}
                          alt=""
                        />
                      </div>
                    </NavCard>
                    <Modal
                      id={property.id}
                      title={type}
                      town={property.town}
                      baths={property.baths}
                      price={property.price}
                      beds={property.beds}
                      pools={property.pool}
                      desc={property.desc.en}
                      images={property.images.image}
                      onClose={() => setShowModal(false)}
                      showModal={showModal === id}
                    />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </motion.main>
  );
};
