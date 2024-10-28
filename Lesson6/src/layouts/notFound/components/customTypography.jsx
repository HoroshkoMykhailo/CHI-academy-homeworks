import React from "react";
import { Typography } from "@mui/material";

const commonStyle = {
  color: "#FFD700",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
  mb: 4, 
};

const CustomTypography = ({ variant, text, sx = {}, mb }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...commonStyle,
        mb: mb ? mb : commonStyle.mb, 
        ...(variant === "h1" ? { fontWeight: "bold", fontSize: { xs: "4rem", md: "6rem" } } : {}),
        ...sx, 
      }}
    >
      {text}
    </Typography>
  );
};

export { CustomTypography };