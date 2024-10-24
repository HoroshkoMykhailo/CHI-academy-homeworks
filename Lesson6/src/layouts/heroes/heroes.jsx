import React from "react";
import { Outlet } from "react-router-dom";

const Heroes = () => {
    return (
        <div>
            <h1>Heroes</h1>
            <Outlet />
        </div>
    );
};

export { Heroes };