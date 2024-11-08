import { useRequest } from "ahooks";
import { fetchExhibits } from "~/api/exhibitActions";
import { pageLimit } from "~/constants/constants";

interface UseExhibitsParams {
  page: number;
  myPosts?: boolean;
}

export const useExhibits = ({ page, myPosts = false }: UseExhibitsParams) => {
  const { data, loading, error, refresh } = useRequest(
    () => fetchExhibits(page, pageLimit, myPosts),
    { refreshDeps: [page] }
  );
  return { data, loading, error, refresh };
};