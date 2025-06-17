import { PropertyContext } from "./PropertyContext";
import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FilteredPropertyList from "./FilteredPropertyList.js";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, Chip, Button } from "@mui/joy";
import { typeLabels } from "./labels.js";

export const Hjem = () => {
  const { properties, loading, error } = useContext(PropertyContext);

  const [selectedTown, setSelectedTown] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const uniqueTowns = useMemo(() => {
    return [...new Set(properties.map((p) => p.town).filter(Boolean))];
  }, [properties]);

  const uniqueTypes = useMemo(() => {
    return [...new Set(properties.map((p) => p.type).filter(Boolean))];
  }, [properties]);

  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="hero-section">
        <h1>Finn ditt nye hjem i Spania</h1>
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

          {/* Boligtype (Types) */}
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

          <Button
            onClick={() =>
              navigate(
                `/objekter?town=${encodeURIComponent(
                  selectedTown
                )}&type=${encodeURIComponent(selectedType)}`
              )
            }
            style={{
              padding: "0.5rem",
              maxHeight: "36px",
              backgroundColor: "#030526",
            }}
          >
            Se boliger
          </Button>
        </div>
      </section>

      <article>
        <FilteredPropertyList />
      </article>
    </>
  );
};
