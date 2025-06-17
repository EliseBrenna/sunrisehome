import { createContext, useState, useEffect } from "react";

// Oppretter konteksten for eiendommer
export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "https://mojacarestates.com/xml/kyero_v3_all_features_integrated_sales.json"
        );

        if (!response.ok) {
          throw new Error("Feil ved henting av data");
        }

        const data = await response.json();
        const propertyArray = Object.values(data.property || {});
        setProperties(propertyArray);

        // 🚨 Kunstig delay på 1.5 sekunder
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError(err.message);
        setLoading(false); // unngå delay ved feil
      }
    };

    fetchProperties();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, loading, error }}>
      {children}
    </PropertyContext.Provider>
  );
};
