import { useContext } from "react";
import { PropertyContext } from "./PropertyContext";
import PropertyItem from "./PropertyItem";

const PropertyList = () => {
  const { properties, loading, error } = useContext(PropertyContext);

  if (loading) return <p>Laster eiendommer...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {properties.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
