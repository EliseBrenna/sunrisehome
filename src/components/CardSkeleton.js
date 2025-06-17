import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import { Link } from "@mui/joy";

export default function CardSkeleton() {
  return (
    <Card variant="soft" size="lg">
      <CardOverflow>
        <AspectRatio ratio="2">
          <Skeleton variant="overlay">
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </Skeleton>
        </AspectRatio>
      </CardOverflow>

      <CardContent
        orientation="horizontal"
        style={{ justifyContent: "space-between" }}
      >
        <Typography level="title-md" sx={{ width: "40%" }}>
          <Skeleton />
        </Typography>
        <Typography level="title-md" sx={{ width: "30%" }}>
          <Skeleton />
        </Typography>
      </CardContent>

      <CardContent>
        <Typography level="body-sm">
          <Skeleton width="80%" />
        </Typography>
      </CardContent>

      <CardOverflow variant="soft" sx={{ backgroundColor: "#F5E7BF" }}>
        <CardContent
          orientation="horizontal"
          style={{ justifyContent: "space-between" }}
        >
          <Typography level="body-xs" sx={{ width: "20%" }}>
            <Skeleton />
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" sx={{ width: "20%" }}>
            <Skeleton />
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" sx={{ width: "20%" }}>
            <Skeleton />
          </Typography>
        </CardContent>

        <CardContent>
          <Link
            overlay
            underline="none"
            style={{ display: "block", marginTop: "10px" }}
          >
            <Skeleton width="80%" />
          </Link>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
