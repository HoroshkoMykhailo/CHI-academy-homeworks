import React from "react";
import { useNavigate } from "react-router-dom";
import { ControlBar } from "~/components/components";
import { AppRoute } from "~/constants/constants";

const StripePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ControlBar isAuthenticated={true} onLogout={() => {navigate(AppRoute.LOGIN)}}/>
    );
}

export { StripePage }