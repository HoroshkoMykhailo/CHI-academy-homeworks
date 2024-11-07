import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { DataStatus } from "~/constants/constants";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, }) => {
    const { isAuthenticated, dataStatus} = useSelector((state: RootState) => state.user);

    if(!isAuthenticated && (dataStatus !== DataStatus.PENDING && dataStatus !== DataStatus.IDLE)) {
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export { ProtectedRoute }