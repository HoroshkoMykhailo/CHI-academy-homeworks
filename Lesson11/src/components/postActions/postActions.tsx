'use client';
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Exhibit } from "~/types/types";
import DeleteIcon from "@mui/icons-material/Delete";
import { CommentStripe } from "../components";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { RootState } from "~/store/store";
import { useRequest } from "ahooks";
import { deleteExhibit, fetchExhibitById } from "~/api/exhibitActions";
import { AppRoute } from "~/constants/constants";
import { useRouter } from 'next/navigation';

const PostActions: React.FC<Exhibit> = (exhibit) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [showComments, setShowComments] = useState(false);
  const router = useRouter();
  const formattedDate = format(new Date(exhibit.createdAt), 'dd.MM.yyyy');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data: localExhibit, run: refreshExhibit } = useRequest(
    fetchExhibitById,
    {
      manual: true,
    }
  );

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const { run: deletePost } = useRequest(deleteExhibit, {
    manual: true,
    onSuccess: () => {
      router.push(AppRoute.STRIPE);
    },
  });

  const onDelete = (id: number) => {
    deletePost(id);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Typography variant="caption" display="block" color="text.secondary">
          Comments: {localExhibit?.commentCount ?? exhibit.commentCount} •
          Created: {formattedDate}
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
        {isClient &&user?.id === exhibit.user.id && (
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
          <CommentStripe exhibitId={exhibit.id} refreshPost={refreshExhibit} />
        </Box>
      )}
    </>
  );
};

export { PostActions };