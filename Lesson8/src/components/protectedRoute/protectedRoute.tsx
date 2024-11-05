import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    isAllowed: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAllowed }) => {
    if(!isAllowed) {
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export { ProtectedRoute }