import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { BackendUrl } from "~/constants/constants";
import { Exhibit } from "~/types/types";
import { CommentStripe } from "../components";

interface PostProps extends Exhibit {
  ownerId: number | undefined;
  onDelete: (id: number) => void;
}
const Post: React.FC<PostProps> = ({ ownerId, onDelete, ...exhibit }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };
  
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
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="caption" display="block" color="text.secondary">
            Comments: {exhibit.commentCount} • Created:{" "}
            {new Date(exhibit.createdAt).toLocaleDateString()}
          </Typography>
          <Button
            onClick={handleToggleComments}
            sx={{
              color: "text.secondary",
              fontSize: "0.75rem",
              textTransform: "none",
              mr: 1,
            }}
          >
            {showComments ? "Hide comments" : "Open comments"}
          </Button>
          {ownerId === exhibit.user.id && (
            <IconButton
              aria-label="delete post"
              onClick={() => onDelete(exhibit.id)}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
        {showComments && (
          <Box sx={{ p: 0, pt: 2, borderTop: "1px solid #ddd" }}>
            <CommentStripe exhibitId={exhibit.id} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export { Post };
