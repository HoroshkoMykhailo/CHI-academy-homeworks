import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ControlBar, Post } from "~/components/components";
import { AppRoute, BackendUrl, HeaderHeight } from "~/constants/constants";
import { getExhibits } from "~/store/slices/exhibitsSlice";
import { AppDispatch, RootState } from "~/store/store";

const StripePage: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const exhibits = useSelector((state: RootState) => state.exhibits.exhibits);
  const dataStatus = useSelector(
    (state: RootState) => state.exhibits.dataStatus
  );

  useEffect(() => {
    dispatch(getExhibits());
  }, [dispatch]);

  if (dataStatus === "pending") return <CircularProgress />;
  if (dataStatus === "rejected")
    return <Typography color="error">Error loading exhibits.</Typography>;

  return (
    <>
      <ControlBar
        isAuthenticated={true}
        onLogout={() => {
          navigate(AppRoute.LOGIN);
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100vh - ${HeaderHeight}px)`,
          overflowY: 'auto',
          pt: 2
        }}
      >
          {exhibits.map((exhibit) => (
            <Box key={exhibit.id} mb={3} width="100%" display="flex" justifyContent="center">
              <Post {...exhibit} />
            </Box>
          ))}
      </Box>
    </>
  );
};

export { StripePage };