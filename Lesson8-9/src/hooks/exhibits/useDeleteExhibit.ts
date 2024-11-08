import { useRequest } from "ahooks";
import { deleteExhibit } from "~/api/exhibitActions";

const useDeleteExhibit = () => {
  const { run, data, error, loading } = useRequest(deleteExhibit, {
    manual: true,
  });

  const deletePost = (id: number) => {
    run(id);
  };

  return { deletePost, data, error, loading };
}

export { useDeleteExhibit };