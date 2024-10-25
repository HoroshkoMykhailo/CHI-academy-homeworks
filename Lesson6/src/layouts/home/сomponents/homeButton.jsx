import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Button
      component={Link}
      to="/heroes"
      variant="contained"
      color="warning"
      size="large"
      sx={{
        mt: 4,
        padding: "10px 20px",
        fontSize: "1.2rem",
      }}
    >
      Go to Heroes
    </Button>
  );
};

export default HomeButton;
