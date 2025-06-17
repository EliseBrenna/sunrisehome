import { useContext, useState } from "react";
import { PropertyContext } from "./PropertyContext";
import OverflowCard from "./Card";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const FilteredPropertyList = () => {
  const { properties, loading, error } = useContext(PropertyContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const propertyArray = Object.values(properties);
  const filteredProperties = propertyArray
    .filter((prop) => prop.town === "Mojacar")
    .slice(0, 7);

  const displayCards = loading
    ? Array.from({ length: 5 }) // Vis 5 tomme kort mens det laster
    : filteredProperties;

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % displayCards.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + displayCards.length) % displayCards.length
    );
  };

  const itemWidth = 100 / 5;

  return (
    <div className="carousel-container">
      {activeIndex !== 0 && (
        <button className="carousel-button left" onClick={prevCard}>
          <ArrowBackIosNewRoundedIcon />
        </button>
      )}

      <div className={`carousel ${activeIndex !== 0 ? "show-left-fade" : ""}`}>
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${itemWidth * activeIndex}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {displayCards.map((property, index) => (
            <OverflowCard
              key={property?.id || index}
              property={property}
              className={index === activeIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {activeIndex !== displayCards.length - 1 && (
        <button className="carousel-button right" onClick={nextCard}>
          <ArrowForwardIosRoundedIcon />
        </button>
      )}
    </div>
  );
};

export default FilteredPropertyList;
