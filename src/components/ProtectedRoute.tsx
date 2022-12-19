import {useAppContext} from "@/providers/AppProvider";
import React from "react";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ page }: { page: React.ComponentType }): React.ReactElement => {
    const { checkUser } = useAppContext();

    if (!checkUser()) {
        return <Navigate to="/login" replace />;
    }

    return React.createElement(page);
};