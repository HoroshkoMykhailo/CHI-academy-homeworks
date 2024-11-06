import { Box, Typography } from "@mui/material";
import React from "react";
import { type CommentI } from "~/types/types";

const Comment: React.FC<CommentI> = (comment) => {
    const date = new Date(comment.createdAt);
    const data = `${date.getHours()}:${("0" + date.getMinutes()).slice(
      -2
    )} ${date.toLocaleString("en-US", {
      month: "long",
    })} ${date.getDate()} ${date.getFullYear()}`;

    
    return (
      <Box
        key={comment.id}
        sx={{ mb: 1, p: 1, borderBottom: "1px solid #ddd" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" color="text.primary">
            {comment.user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {comment.text}
        </Typography>
      </Box>
    );
}

export { Comment }