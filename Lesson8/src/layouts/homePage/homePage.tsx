import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlBar, Post, Pagination, ExhibitsList } from "~/components/components";
import { Colors, HeaderHeight } from "~/constants/constants";
import { getMyExhibits } from "~/store/slices/exhibitsSlice";
import { AppDispatch, RootState } from "~/store/store";

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { exhibits, dataStatus, lastPage } = useSelector((state: RootState) => state.exhibits);
    const { isAuthenticated } = useSelector((state: RootState) => state.user);
  
    const [page, setPage] = React.useState(1);
    const [limit] = React.useState(5);
  
    useEffect(() => {
      dispatch(getMyExhibits({ page, limit }));
    }, [page, limit, dispatch]);
  
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
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
        />
      </>
    );
};

export { HomePage }