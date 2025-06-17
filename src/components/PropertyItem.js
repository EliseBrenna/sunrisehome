const PropertyItem = ({ property }) => {
    return (
      <div>
        <img
          src={property.images[0]?.url || "https://via.placeholder.com/300"}
          alt={property.title}
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
        <h2>{property.title}</h2>
        <p>{property.price} €</p>
        <p>
          {property.bedrooms} soverom | {property.bathrooms} bad
        </p>
        <a href={property.url} target="_blank" rel="noopener noreferrer">
          Se mer
        </a>
      </div>
    );
  };
  
  export default PropertyItem;
  