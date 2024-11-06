import { Box, CircularProgress, Typography } from "@mui/material";
import { useRequest } from "ahooks";
import React from "react";
import { getComments } from "~/api/commentActions";
import { Comment } from "~/components/components";

interface CommentStripeProps {
    exhibitId: number
}

const CommentStripe: React.FC<CommentStripeProps> = ({exhibitId}) => {
    const { data: comments, loading, error } = useRequest(() => getComments(exhibitId));

   return (
    <Box>
      {loading && <CircularProgress size={24} />}
      {error && (
        <Typography variant="body2" color="error">
          Failed to load comments.
        </Typography>
      )}
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))
      ) : (
        !loading && (
          <Typography variant="body2" color="text.secondary">
            No comments yet.
          </Typography>
        )
      )}
    </Box>
  );
}

export { CommentStripe }