import { useRequest } from "ahooks";
import { getComments } from "~/api/commentActions";

export const useComments = (exhibitId: number) => {
  const { data, loading, error, refresh } = useRequest(() => getComments(exhibitId));
  return { comments: data, loading, error, refresh };
};