import Carousel, { CarouselItem } from "./Carousel";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import { useState } from "react";
import BedIcon from '@mui/icons-material/Bed';
import PoolIcon from "@mui/icons-material/Pool";
import ShowerIcon from '@mui/icons-material/Shower';
import EuroIcon from '@mui/icons-material/EuroSymbol';

const Modal = ({
  showModal,
  onClose,
  title,
  town,
  price,
  baths,
  beds,
  pools,
  desc,
  images,
  id,
}) => {
  const [expanded, setExpanded] = useState(false);
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">
            {title} i {town} €{price}<p className="id">#{id}</p> 
          </h4>
          <CloseIcon onClick={onClose} className="icon" />
        </div>
        <div className="modal-body">
          <div className="sections">
            <div className="modal-section"> <p><ShowerIcon/>Baderom: {baths}</p></div>
            <div className="modal-section"> <p><BedIcon/>Soverom: {beds}</p></div>
            <div className="modal-section">
              {" "}
              <p><PoolIcon/> Svømmebasseng: {pools === 0 ? "0" : pools}</p>
            </div>
          </div>

          <div className="description">
            {desc.slice(0, 100)}

            {expanded && desc.slice(100)}
            {!expanded ? (
              <span className="expand-button" onClick={() => setExpanded(true)}>
                ...Les mer
              </span>
            ) : (
              <span
                className="expand-button"
                onClick={() => setExpanded(false)}
              >
                ...Les mindre
              </span>
            )}
          </div>

          <Carousel>
            {images.map((image) => {
              return (
                <CarouselItem>
                  <img clasName="carousel-image" src={image.url} alt="" />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Modal;
