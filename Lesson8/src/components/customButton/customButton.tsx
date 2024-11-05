import React from "react";
import { Button, Typography } from "@mui/material";
import { Colors } from "~/constants/constants";

interface CustomButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    width?: string | number;
    height?: string | number;
    fontSize?: string | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  width = 100,
  fontSize = "1.2rem",
  height = 40,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: Colors.buttonColor,
        color: Colors.textPrimary,
        width: width,
        height: height,
      }}
    >
      <Typography sx={{ fontSize: fontSize }}>{children}</Typography>
    </Button>
  );
};

export { CustomButton };