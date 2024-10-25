import React from "react";
import { Box } from "@mui/material";

const MainContainer = ({ children, backgroundImage, backgroundSize = "cover", backgroundPosition = "center", color="white" }) => {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: color,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
        }}
      >
        {children}
      </Box>
    );
  };

export { MainContainer };