import React from "react";
import { Typography } from "@mui/material";

const AboutDescription = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
      >
        This library is a collection of characters from the popular animated
        series "Rick and Morty". Explore detailed profiles, species, and
        status of your favorite heroes and villains from across the
        multiverse.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: 2,
        }}
      >
        Built using the Rick and Morty API.
      </Typography>
    </>
  );
};

export default AboutDescription;
