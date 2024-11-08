import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ControlBar, ExhibitsList } from "~/components/components";
import { useExhibits, useNewPostNotification, useDeleteExhibit } from "~/hooks/hooks";
import { AppDispatch, RootState } from "~/store/store";

const StripePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page") || "1", 10); 

  const { data, loading, error, refresh } = useExhibits({ page });
  const { deletePost, loading: deleteLoading, error: deleteError } = useDeleteExhibit();

  useNewPostNotification(page, refresh);
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/?page=${value}`);
  };

  const handleDeleteExhibit = (id: number) => {
    deletePost(id);
  };

  useEffect(() => {
    if (!deleteLoading){
      refresh();
    }
  }, [deleteLoading]);

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