import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ControlBar, ExhibitsList, Pagination, Post } from "~/components/components";
import { useExhibits, useNewPostNotification } from "~/hooks/hooks";
import { deletePost } from "~/store/slices/exhibitSlice";
import { AppDispatch, RootState } from "~/store/store";

const StripePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page") || "1", 10); 

  const { data, loading, error, refresh } = useExhibits({ page });

  useNewPostNotification(page, refresh);
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/?page=${value}`);
  };

  const handleDeleteExhibit = async (id: number) => {
    await dispatch(deletePost(id));
    refresh();
  };

  return (
    <>
      <ControlBar isAuthenticated={isAuthenticated} />
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

export { StripePage };