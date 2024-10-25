import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { MainContainer } from "../../components/components";
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  return (
    <MainContainer>
      <Container maxWidth="md" sx={{ borderRadius: 4, p: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          About Rick and Morty Heroes Library
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "white",
          }}
        >
          This library is a collection of characters from the popular animated
          series "Rick and Morty". Explore detailed profiles, species, and
          status of your favorite heroes and villains from across the
          multiverse.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          Built using the Rick and Morty API.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            mt: 10,
          }}
        >
          Developer Information
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          Developed by Mykhailo Horoshko. Find more projects on{" "}
          <Link
            href="https://github.com/HoroshkoMykhailo"
            target="_blank"
            underline="none"
            rel="noopener"
            sx={{ fontWeight: "bold" }}
          >
            <GitHubIcon sx={{ mr: 0.5 }} />
            GitHub
          </Link>
          .
        </Typography>
      </Container>
    </MainContainer>
  );
};

export { About };