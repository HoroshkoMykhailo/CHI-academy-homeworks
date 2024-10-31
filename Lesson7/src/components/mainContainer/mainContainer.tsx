import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface MainContainerProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  backgroundImage,
  backgroundSize = "cover",
  backgroundPosition = "center",
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
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