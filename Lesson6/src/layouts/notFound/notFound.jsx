import React from "react";
import { Typography, Button} from "@mui/material";
import { MainContainer } from "../../components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../constants/constants";

const NotFound = () => {
  const navigate = useNavigate();
    return (
      <MainContainer
        backgroundImage="https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg"
      >
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
          variant="contained"
          size="large"
          fullWidth
          sx={{
            maxWidth: "20%",
            backgroundColor: "#FF5733", 
            color: "white",
            fontSize: "1.5rem",
            '&:hover': { backgroundColor: "#FF7844" }, 
          }}
          onClick={() => navigate(`${AppRoute.HOME}`)}
        >
          Go Home
        </Button>
      </MainContainer>
    );
  };
export { NotFound };