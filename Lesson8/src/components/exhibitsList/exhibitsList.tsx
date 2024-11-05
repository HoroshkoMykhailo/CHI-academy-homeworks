import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Post, Pagination } from "~/components/components";
import { Colors, HeaderHeight } from "~/constants/constants";
import { Exhibit } from "~/types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";

interface ExhibitsListProps {
  exhibits: Exhibit[];
  dataStatus: string;
  page: number;
  lastPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  onDeleteExhibit: (id: number) => void;
}

const ExhibitsList: React.FC<ExhibitsListProps> = ({
  exhibits,
  dataStatus,
  page,
  lastPage,
  onPageChange,
  onDeleteExhibit,
}) => {
  const { user } = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
  <>
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
      {exhibits.length === 0 && dataStatus === "fulfilled" && (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Typography>No exhibits found.</Typography>
        </Box>
      )}
      {dataStatus === "fulfilled" &&
        exhibits.map((exhibit) => (
          <Box key={exhibit.id} mb={3} width="100%" display="flex" justifyContent="center">
            <Post ownerId={user?.id} onDelete={onDeleteExhibit} {...exhibit} />
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
      <Pagination page={page} lastPage={lastPage} onChange={onPageChange} />
    </Box>
  </>
);
}

export { ExhibitsList };