import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { heroesColumns, sidebarWidth } from "../../constants/constants";
import { useFetchHeroes } from "../../hooks/useFetchHeroes";

const Heroes = () => {
  const { heroes, totalCount, paginationModel, setPaginationModel } = useFetchHeroes();

  return (
    <>
      <Box sx={{ height: "100vh", maxWidth: `calc(100vw - ${sidebarWidth}px)` }}>
        <DataGrid
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rows={heroes}
          columns={heroesColumns}
          paginationMode="server"
          rowCount={totalCount}
        />
      </Box>
      <Outlet />
    </>
  );
};

export { Heroes };