import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import BedIcon from "@mui/icons-material/Bed";
import PoolIcon from "@mui/icons-material/Pool";
import ShowerIcon from "@mui/icons-material/Shower";
import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";
import { typeLabels } from "./labels";
import CardSkeleton from "./CardSkeleton";

export default function OverflowCard({ property, className }) {
  const navigate = useNavigate();

  if (!property || !property.images || !property.images.image) {
    return <CardSkeleton />;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      variant="soft"
      size="lg"
      className={`MuiCard-root ${className}`}
      style={{ backgroundColor: "#030526" }}
      key={property.id}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={property.images.image[0].url}
            srcSet={property.images.image[0].url}
            loading="lazy"
            alt={property.title}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        orientation="horizontal"
        style={{ justifyContent: "space-between" }}
      >
        <Typography level="title-md">
          {" "}
          <Link overlay underline="none" style={{ color: "white" }}>
            {typeLabels[property.type] || property.type}
          </Link>
        </Typography>
        <Typography level="title-md" style={{ color: "white" }}>
          {" "}
          {formatPrice(property.price)}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography level="body-sm" style={{ color: "white" }}>
          {property.town}, {property.province}
        </Typography>
      </CardContent>

      <CardOverflow variant="soft" sx={{ backgroundColor: "#F5E7BF" }}>
        <Divider inset="context" />
        <CardContent
          orientation="horizontal"
          style={{ justifyContent: "space-between" }}
        >
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <BedIcon style={{ paddingRight: "5px" }} />
            {property.beds}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ShowerIcon style={{ paddingRight: "5px" }} />
            {property.baths}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <PoolIcon style={{ paddingRight: "5px" }} />
            {property?.pool || "0"}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
