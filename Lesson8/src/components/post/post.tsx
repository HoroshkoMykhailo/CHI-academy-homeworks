import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { BackendUrl } from "~/constants/constants";
import { Exhibit } from "~/types/types";

interface PostProps extends Exhibit {
  ownerId: number | undefined;
  onDelete: (id: number) => void;
}
const Post: React.FC<PostProps> = ({ ownerId, onDelete, ...exhibit }) => {
  return (
    <Card sx={{ width: 600, position: "relative" }}>
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
        <Typography variant="caption" display="block" color="text.secondary">
          Comments: {exhibit.commentCount} • Created:{" "}
          {new Date(exhibit.createdAt).toLocaleDateString()}
        </Typography>
        {ownerId === exhibit.user.id && (
          <IconButton
            aria-label="delete post"
            onClick={() => onDelete(exhibit.id)}
            sx={{ position: "absolute", bottom: 10, right: 8 }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export { Post };
