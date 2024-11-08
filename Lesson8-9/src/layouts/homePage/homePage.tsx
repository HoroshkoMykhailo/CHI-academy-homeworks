import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ControlBar, ExhibitsList } from "~/components/components";
import { AppRoute } from "~/constants/constants";
import { useExhibits } from "~/hooks/hooks";
import { deletePost } from "~/store/slices/exhibitSlice";
import { AppDispatch, RootState } from "~/store/store";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, loading, error, refresh } = useExhibits({ page, myPosts: true });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`${AppRoute.HOME}/?page=${value}`);
  };

  const handleDeleteExhibit = async (id: number) => {
    await dispatch(deletePost(id));
    refresh();
  };

  return (
    <>
      <ControlBar isAuthenticated={isAuthenticated} myPosts />
      <ExhibitsList
        exhibits={data?.data}
        loading={loading}
        error={error?.message}
        page={page}
        lastPage={data?.lastPage || 1}
        onPageChange={handlePageChange}
        onDeleteExhibit={handleDeleteExhibit}
      />
    </>
  );
};

export { HomePage };
