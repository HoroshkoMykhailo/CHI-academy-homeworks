import React from "react";
import { Box } from "@mui/material";

const MainContainer = ({ children, backgroundImage, backgroundSize = "cover", backgroundPosition = "center" }) => {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#121212",
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