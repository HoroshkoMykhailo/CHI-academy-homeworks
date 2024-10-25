import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Drawer, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { AppRoute } from "../../constants/constants";
import { useFetchHero } from "../../hooks/useFetchHero";

const Hero = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hero = useFetchHero(id);

  const handleClose = () => {
    navigate(`${AppRoute.HEROES}`);
  };

  if (!hero) return <div>Loading...</div>;

  return (
    <Drawer anchor="right" open={true} onClose={handleClose}>
      <Box sx={{ width: "25vw", padding: 2 }}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Card sx={{ mt: 2}}>
          <CardMedia
            component="img"
            alt={hero.name}
            image={hero.image}
          />
          <CardContent>
            <Typography variant="h5">{hero.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {hero.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {hero.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Species: {hero.species}
            </Typography>
            {hero.type && (
              <Typography variant="body2" color="text.secondary">
                Type: {hero.type}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              Gender: {hero.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Origin: {hero.origin.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {hero.location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Episodes: {hero.episode.length} episodes
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Drawer>
  );
};

export { Hero };