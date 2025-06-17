import { useSearchParams } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import { PropertyContext } from "./PropertyContext";
import OverflowCard from "./Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, Chip } from "@mui/joy";
import { typeLabels } from "./labels.js";

export const Områder = () => {
  const { properties } = useContext(PropertyContext);
  const [searchParams] = useSearchParams();
  const [selectedTown, setSelectedTown] = useState(searchParams.get("town"));
  const [selectedType, setSelectedType] = useState(searchParams.get("type"));
  const [selectedBeds, setSelectedBeds] = useState(searchParams.get("beds"));
  const [selectedBaths, setSelectedBaths] = useState(searchParams.get("baths"));

  const uniqueTowns = useMemo(() => {
    return [...new Set(properties.map((p) => p.town).filter(Boolean))];
  }, [properties]);

  const uniqueTypes = useMemo(() => {
    return [...new Set(properties.map((p) => p.type).filter(Boolean))];
  }, [properties]);

  const uniqueBeds = useMemo(() => {
    return [...new Set(properties.map((p) => p.beds).filter(Boolean))];
  }, [properties]);

  const uniqueBaths = useMemo(() => {
    return [...new Set(properties.map((p) => p.baths).filter(Boolean))];
  }, [properties]);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesTown = selectedTown ? p.town === selectedTown : true;
      const matchesType = selectedType ? p.type === selectedType : true;
      const matchesBeds = selectedBeds ? p.beds === selectedBeds : true;
      const matchesBaths = selectedBaths ? p.baths === selectedBaths : true;
      return matchesTown && matchesType && matchesBeds && matchesBaths;
    });
  }, [properties, selectedTown, selectedType, selectedBeds, selectedBaths]);

  console.log(properties);

  return (
    <section className="objects-section">
      <div className="select-container">
        {/* Område (Towns) */}
        <div className="select">
          <label>Område</label>
          <Select
            value={selectedTown}
            onChange={(event, newValue) => setSelectedTown(newValue)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                {selected && (
                  <Chip variant="soft" style={{ color: "#030526" }}>
                    {selected.value}
                  </Chip>
                )}
              </Box>
            )}
            sx={{ minWidth: "15rem" }}
            slotProps={{
              listbox: {
                sx: { width: "100%" },
              },
            }}
          >
            {uniqueTowns.map((town) => (
              <Option key={town} value={town}>
                {town}
              </Option>
            ))}
          </Select>
        </div>

        <div className="select">
          <label>Boligtype</label>
          <Select
            value={selectedType}
            onChange={(event, newValue) => setSelectedType(newValue)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                {selected && (
                  <Chip variant="soft" style={{ color: "#030526" }}>
                    {typeLabels[selected.value] || selected}
                  </Chip>
                )}
              </Box>
            )}
            sx={{ minWidth: "15rem" }}
            slotProps={{
              listbox: {
                sx: { width: "100%" },
              },
            }}
          >
            {uniqueTypes.map((type) => (
              <Option key={type} value={type}>
                {typeLabels[type] || type}
              </Option>
            ))}
          </Select>
        </div>

        <div className="select">
          <label>Soverom</label>
          <Select
            value={selectedBeds}
            onChange={(event, newValue) => setSelectedBeds(newValue)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                {selected && (
                  <Chip variant="soft" style={{ color: "#030526" }}>
                    {selected.value}
                  </Chip>
                )}
              </Box>
            )}
            sx={{ minWidth: "15rem" }}
            slotProps={{
              listbox: {
                sx: { width: "100%" },
              },
            }}
          >
            {uniqueBeds.map((beds) => (
              <Option key={beds} value={beds}>
                {beds}
              </Option>
            ))}
          </Select>
        </div>

        <div className="select">
          <label>Bad</label>
          <Select
            value={selectedBaths}
            onChange={(event, newValue) => setSelectedBaths(newValue)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                {selected && (
                  <Chip variant="soft" style={{ color: "#030526" }}>
                    {selected.value}
                  </Chip>
                )}
              </Box>
            )}
            sx={{ minWidth: "15rem" }}
            slotProps={{
              listbox: {
                sx: { width: "100%" },
              },
            }}
          >
            {uniqueBaths.map((baths) => (
              <Option key={baths} value={baths}>
                {baths}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="objects-section-cards">
        {filteredProperties.length === 0 ? (
          <p>Ingen boliger funnet med de valgte kriteriene.</p>
        ) : (
          filteredProperties.map((property) => (
            <OverflowCard property={property} key={property.id} />
          ))
        )}
      </div>
    </section>
  );
};
