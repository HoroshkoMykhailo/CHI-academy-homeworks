import React from "react";
import { Typography } from "@mui/material";

const HomeHeader: React.FC = () => {
  return (
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      Rick and Morty Heroes Library
    </Typography>
  );
};

export default HomeHeader;