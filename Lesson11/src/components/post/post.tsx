import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { BackendUrl } from "~/constants/constants";
import { Exhibit } from "~/types/types";
import { PostActions } from "~/components/components";

const Post: React.FC<Exhibit> = ( exhibit ) => {
  return (
    <Card sx={{ width: 600, position: "relative", mb: 2 }}>
      <CardMedia
        component="img"
        width="600"
        image={BackendUrl + exhibit.imageUrl}
        alt={exhibit.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {exhibit.user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {exhibit.description}
        </Typography>
        <PostActions {...exhibit} />
      </CardContent>
    </Card>
  );
};

export { Post };
