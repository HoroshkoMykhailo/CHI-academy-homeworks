import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ControlBar, Pagination, Post } from "~/components/components";
import { Colors, HeaderHeight } from "~/constants/constants";
import { getExhibits } from "~/store/slices/exhibitsSlice";
import { AppDispatch, RootState } from "~/store/store";

const StripePage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { exhibits, dataStatus, lastPage } = useSelector(
    (state: RootState) => state.exhibits
  );

  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(5);

  useEffect(() => {
    dispatch(getExhibits({ page, limit }));
  }, [page, limit, dispatch]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <>
      <ControlBar
        isAuthenticated={isAuthenticated}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100vh - 2*${HeaderHeight}px)`,
          overflowY: "auto",
          pt: 2,
        }}
      >
        {dataStatus === "pending" && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        )}
        {dataStatus === "rejected" && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography color="error">Error loading exhibits.</Typography>
          </Box>
        )}
        {dataStatus === "fulfilled" &&
          exhibits.map((exhibit) => (
            <Box
              key={exhibit.id}
              mb={3}
              width="100%"
              display="flex"
              justifyContent="center"
            >
              <Post {...exhibit} />
            </Box>
          ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        pt={2}
        height={HeaderHeight}
        sx={{
          backgroundColor: Colors.backgroundPrimary,
        }}
      >
        <Pagination
          page={page}
          lastPage={lastPage}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export { StripePage };