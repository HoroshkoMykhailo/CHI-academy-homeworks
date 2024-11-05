import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { BackendUrl } from "~/constants/constants";
import { Exhibit } from "~/types/types";

const Post: React.FC<Exhibit> = (exhibit) => {
  return (
    <Card sx={{ width: 600 }}>
      <CardMedia
        component="img"
        width="600"
        height="300"
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
        <Typography variant="caption" display="block" color="text.secondary">
          Comments: {exhibit.commentCount} • Created:{" "}
          {new Date(exhibit.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { Post };
