import React from "react";
import { Typography } from "@mui/material";

const HomeDescription: React.FC = () => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
      }}
    >
      Explore all your favorite characters from the Rick and Morty universe!
    </Typography>
  );
};

export default HomeDescription;
