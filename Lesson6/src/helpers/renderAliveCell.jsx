import React from "react";

const renderAliveCell = (params) => {
    const color = params.value === "Alive" ? "green" : params.value === "Dead" ? "red" : "gray";
    
    return (
      <span style={{ color: color, fontWeight: 'bold' }}>
        {params.value}
      </span>
    );
};

export { renderAliveCell };