import React from "react";
import { Typography } from "@mui/material";

const AboutHeader: React.FC = () => {
  return (
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontWeight: "bold",
      }}
    >
      About Rick and Morty Heroes Library
    </Typography>
  );
};

export default AboutHeader;
