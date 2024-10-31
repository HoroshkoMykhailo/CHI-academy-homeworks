import React from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";

const renderAliveCell = (params: GridRenderCellParams): JSX.Element => {
    const color = params.value === "Alive" ? "green" : params.value === "Dead" ? "red" : "gray";
    
    return (
      <span style={{ color: color, fontWeight: 'bold' }}>
        {params.value}
      </span>
    );
};

export { renderAliveCell };