import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PropertyContext } from "./PropertyContext";
import { typeLabels } from "./labels";
import { Button } from "@mui/joy";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = useContext(PropertyContext);
  const [open, setOpen] = useState(false);

  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Fant ikke eiendommen.</p>;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  console.log(property.desc.en);

  return (
    <div className="object-container">
      <div className="object-header">
        {" "}
        <h1>
          {property.beds} soverom, {property.baths} bad –{" "}
          {typeLabels[property.type] || property.type} <br />
          <p>
            {property.town}, {property.province}
          </p>
        </h1>
        <h2>{formatPrice(property.price)}</h2>
      </div>

      <div className="img-container">
        <div className="img-1">
          <img src={property.images.image[0].url} alt={property.title} />
        </div>
        <div className="img-2">
          <img src={property.images.image[1].url} alt={property.title} />
        </div>
        <div className="img-3">
          <img src={property.images.image[2].url} alt={property.title} />
        </div>
        <div className="img-4">
          <img src={property.images.image[3].url} alt={property.title} />
        </div>
        <div className="img-5">
          <img src={property.images.image[4].url} alt={property.title} />
          <Button
            onClick={() => setOpen(true)}
            style={{
              padding: "0.5rem",
              maxHeight: "36px",
              backgroundColor: "#F2F2F2",
              color: "black",
              border: "2px solid #f2c53d",
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
            }}
          >
            Vis alle bilder
          </Button>
        </div>
      </div>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 800, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1 }}
          >
            {property.beds} soverom, {property.baths} bad –{" "}
            {typeLabels[property.type] || property.type} <br />
            <p>
              {property.town}, {property.province}
            </p>{" "}
          </Typography>
          <Slider {...sliderSettings}>
            {property.images.image.map((image, i) => (
              <div key={i}>
                <img
                  src={image.url}
                  alt={`${property.title} - bilde ${i + 1}`}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            ))}
          </Slider>
        </Sheet>
      </Modal>

      <div className="object-description">
        <h2>Detaljer</h2>
        <ul>
          <li>Soverom: {property.beds}</li>
          <li>Bad: {property.baths}</li>
          <li>Basseng: {property.pool}</li>
        </ul>

        <h2>Beskrivelse</h2>
        {property.desc.en.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
