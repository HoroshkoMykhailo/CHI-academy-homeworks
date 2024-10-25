import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { MainContainer } from "../../components/components";

const Home = () => {
    return (
      <MainContainer
        backgroundImage ="https://m.media-amazon.com/images/M/MV5BMzU1MzAyNzUtY2FlZi00YTg1LTg2OGQtZjZjYzg3YWVlNGMyXkEyXkFqcGdeQW1yb2Njbw@@._V1_.jpg"
      >
        <Container maxWidth="md" sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: 4, p: 4 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            Rick and Morty Heroes Library
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "white",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            Explore all your favorite characters from the Rick and Morty universe!
          </Typography>
          <Button
            component={Link}
            to="/heroes"
            variant="contained"
            color="warning"
            size="large"
            sx={{ mt: 4 }}
          >
            Go to Heroes
          </Button>
        </Container>
      </MainContainer>
    );
};

export { Home };
