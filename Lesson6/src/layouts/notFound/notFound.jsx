import React from "react";
import { Typography, Button} from "@mui/material";
import { MainContainer } from "../../components/components";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <MainContainer backgroundImage="https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg">
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "4rem", md: "6rem" },
            mb: 2,
            color: "#FFD700",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "#FFD700",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          Not Found
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: "#FFD700",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          Oops! The page you are looking for does not exist
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="warning"
          size="large"
          fullWidth
          sx={{
            maxWidth: "20%",
            mt: 4,
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          Go Home
        </Button>
      </MainContainer>
    );
  };
export { NotFound };