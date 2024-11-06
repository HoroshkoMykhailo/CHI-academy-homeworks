import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Comment, CustomButton, StyledTextField } from "~/components/components";
import { Colors } from "~/constants/constants";
import { useComments, useWriteComment } from "~/hooks/hooks";
import { useDeleteComment } from "~/hooks/useDeleteComment";

interface CommentStripeProps {
    exhibitId: number
}

const CommentStripe: React.FC<CommentStripeProps> = ({ exhibitId }) => {
    const { comments, loading, error, refresh } = useComments(exhibitId);
    const { commentText, setCommentText, submitComment, loading: writing } = useWriteComment(exhibitId, refresh);
    const { deleteCommentById, loading: deleting, error: deleteError } = useDeleteComment(exhibitId);

    const handleSubmit = () => {
      if (commentText.trim()) {
        submitComment();
      }
    };

    const handleDelete = (commentId: number) => {
      deleteCommentById(commentId);
    };

    useEffect(() => {
        if (!deleting) {
          if (!deleteError) {
            refresh(); 
          } 
        }
      }, [deleting, deleteError]);
     
    return (
      <>
        {loading && <CircularProgress size={24} />}
        {error && (
          <Typography variant="body2" color="error">
            Failed to load comments.
          </Typography>
        )}
        {comments && comments.length > 0
          ? comments.map((comment) => <Comment key={comment.id} {...comment} onDelete={() => handleDelete(comment.id)} />)
          : !loading && (
              <Typography variant="body2" color="text.secondary">
                No comments yet.
              </Typography>
            )}

        {!error && (
          <Box mt={2} display="flex" alignItems="center" height={"40px"}>
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
                "& .MuiOutlinedInput-root": {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  height: "40px",
                },
              }}
            />
            <CustomButton
              onClick={handleSubmit}
              disabled={writing || !commentText.trim()}
              sx={{
                margin: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                height: "100%",
                border: `1px solid ${Colors.textPrimary}`,
                boxSizing: "border-box",
                borderLeft: "0",
              }}
            >
              {writing ? <CircularProgress size={20} /> : "Post"}
            </CustomButton>
          </Box>
        )}
      </>
    );
  };
  
  export { CommentStripe };