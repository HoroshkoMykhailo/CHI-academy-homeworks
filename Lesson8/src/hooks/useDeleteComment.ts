import { useRequest } from "ahooks";
import { deleteComment } from "~/api/commentActions";

export const useDeleteComment = (exhibitId: number) => {
  const { loading, error, run } = useRequest(
    (id: number) => deleteComment(exhibitId, id),
    { manual: true }
  );

  const deleteCommentById = (id: number) => {
    run(id);
  };

  return { deleteCommentById, loading, error };
};