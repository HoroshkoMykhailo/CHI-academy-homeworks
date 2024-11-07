import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlBar, ExhibitsList } from "~/components/components";
import { deletePost } from "~/store/slices/exhibitSlice";
import { getExhibits } from "~/store/slices/exhibitsSlice";
import { AppDispatch, RootState } from "~/store/store";

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { exhibits, dataStatus, lastPage } = useSelector((state: RootState) => state.exhibits);
    const { isAuthenticated } = useSelector((state: RootState) => state.user);
  
    const [page, setPage] = React.useState(1);
    const [limit] = React.useState(5);
  
    useEffect(() => {
      dispatch(getExhibits({ page, limit, myPosts: true }));
    }, [page, limit, dispatch]);
  
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
  
    const handleDeleteExhibit = async (id: number) => {
      await dispatch(deletePost(id));
      dispatch(getExhibits({ page, limit }));
    };
    
    return (
      <>
        <ControlBar isAuthenticated={isAuthenticated} myPosts />
        <ExhibitsList
          exhibits={exhibits}
          dataStatus={dataStatus}
          page={page}
          lastPage={lastPage}
          onPageChange={handlePageChange}
          onDeleteExhibit={handleDeleteExhibit}
        />
      </>
    );
};

export { HomePage }