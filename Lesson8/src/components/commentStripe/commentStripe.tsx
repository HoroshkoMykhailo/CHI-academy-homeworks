import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Comment, CustomButton, StyledTextField } from "~/components/components";
import { useComments, useSubmitComment } from "~/hooks/hooks";

interface CommentStripeProps {
    exhibitId: number
}

const CommentStripe: React.FC<CommentStripeProps> = ({ exhibitId }) => {
    const { comments, loading, error, refresh } = useComments(exhibitId);
    const { commentText, setCommentText, submitComment, loading: writing } = useSubmitComment(exhibitId, refresh);
  
    const handleSubmit = () => {
      if (commentText.trim()) {
        submitComment();
      }
    };
  
    return (
      <Box>
        {loading && <CircularProgress size={24} />}
        {error && (
          <Typography variant="body2" color="error">
            Failed to load comments.
          </Typography>
        )}
        {comments && comments.length > 0
          ? comments.map((comment) => <Comment key={comment.id} {...comment} />)
          : !loading && (
              <Typography variant="body2" color="text.secondary">
                No comments yet.
              </Typography>
            )}
  
        {!error && (
          <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
            <StyledTextField
              label="Write a comment"
              variant="outlined"
              margin="normal"
              value={commentText}
              fullWidth
              onChange={(e) => setCommentText(e.target.value)}
              size="small"
              sx={{
                margin: 0,
                marginRight: 2,
              }}
            />
            <CustomButton onClick={handleSubmit} disabled={writing || !commentText.trim()}>
              {writing ? <CircularProgress size={20} /> : "Post"}
            </CustomButton>
          </Box>
        )}
      </Box>
    );
  };
  
  export { CommentStripe };