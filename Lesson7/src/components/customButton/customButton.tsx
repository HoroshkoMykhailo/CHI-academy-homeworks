import React from "react";
import { Button, SxProps } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  to: string;
  text: string;
  sx?: SxProps;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ to, text, sx, fullWidth = false }) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      color="warning"
      size="large"
      fullWidth={fullWidth}
      sx={{
        mt: 4,
        padding: "10px 20px",
        fontSize: "1.2rem",
        ...sx, 
      }}
    >
      {text}
    </Button>
  );
};

export { CustomButton };
