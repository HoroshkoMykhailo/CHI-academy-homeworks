import { useRequest } from "ahooks";
import { useState } from "react";
import { writeComment } from "~/api/commentActions";

export const useWriteComment = (exhibitId: number, refreshComments: () => void) => {
  const [commentText, setCommentText] = useState("");

  const { loading, run: submitComment } = useRequest(
    async () => {
      await writeComment(exhibitId, commentText);
      setCommentText(""); 
      refreshComments();
    },
    { manual: true }
  );

  return { commentText, setCommentText, submitComment, loading };
};
