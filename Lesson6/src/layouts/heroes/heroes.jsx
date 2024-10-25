import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { heroesColumns, sidebarWidth } from "../../constants/constants";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      const heroesData = data.results.map(hero => ({
        id: hero.id,
        name: hero.name,
        status: hero.status,
      }));
      setHeroes(heroesData);
    };

    fetchHeroes();
  }, []);

  return (
    <>
      <Box sx={{ height: "100vh", maxWidth: `calc(100vw - ${sidebarWidth}px)`, overflow: "hidden" }}>
        <DataGrid
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          rows={heroes}
          columns={heroesColumns}
        />
      </Box>
      <Outlet />
    </>
  );
};

export { Heroes };