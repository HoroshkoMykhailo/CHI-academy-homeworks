import React from "react";
import { Typography, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const DeveloperInfo = () => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mt: 10,
        }}
      >
        Developer Information
      </Typography>
      <Typography
        variant="body1"
        sx={{
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
    </>
  );
};

export default DeveloperInfo;
