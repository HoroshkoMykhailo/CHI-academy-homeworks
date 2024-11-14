import React from "react";
import { Box, Typography } from "@mui/material";
import { Post, Pagination } from "~/components/components";
import { Colors, HeaderHeight } from "~/constants/constants";
import { Exhibit } from "~/types/types";

interface ExhibitsListProps {
  exhibits: Exhibit[];
  page: number;
  lastPage: number;
}

const ExhibitsList: React.FC<ExhibitsListProps> = ({
  exhibits = [],
  page,
  lastPage,
}) => {
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
        {exhibits.length === 0  && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography>No exhibits found.</Typography>
          </Box>
        )}
        {exhibits.map((exhibit) => (
          <Box key={exhibit.id} mb={3} width="100%" display="flex" justifyContent="center">
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
        <Pagination page={page} lastPage={lastPage} />
      </Box>
    </>
  );
};

export { ExhibitsList };
