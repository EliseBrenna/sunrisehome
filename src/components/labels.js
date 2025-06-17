export const typeLabels = {
  Apartment: "Leilighet",
  Villa: "Villa",
  House: "Hus",
  "Town House": "Rekkehus",
  "Pent House": "Penthouse",
  Duplex: "Dupleks",
  Studio: "Studio",
  "Country House": "Landshus",
  Land: "Tomt",
  Commercial: "Kommersiell",
  "Village House": "Landsbyhus",
  Ruin: "Ruin",
};

export const getLabel = (map, value) => {
  return map?.[value] || value;
};
