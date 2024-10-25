import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { heroesColumns, sidebarWidth } from "../../constants/constants";
import { useFetchHeroes } from "../../hooks/useFetchHeroes";
import { AppRoute } from "../../constants/constants";

const Heroes = () => {
  const { heroes, totalCount, paginationModel, setPaginationModel , isLoading} = useFetchHeroes();
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    navigate(`${AppRoute.HEROES}/${params.id}`);
  };

  return (
    <>
      <Box sx={{ height: "100vh", maxWidth: `calc(100vw - ${sidebarWidth}px)` }}>
        <DataGrid
          paginationModel={paginationModel}
          loading={isLoading}
          onPaginationModelChange={setPaginationModel}
          rows={heroes}
          columns={heroesColumns}
          paginationMode="server"
          rowCount={totalCount}
          onRowClick={handleRowClick}
        />
      </Box>
      <Outlet />
    </>
  );
};

export { Heroes };