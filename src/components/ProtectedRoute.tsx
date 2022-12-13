import {useAppContext} from "@/providers/AppProvider";
import React from "react";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}: { children: JSX.Element }): JSX.Element => {
    const {checkUser} = useAppContext()

    if (!checkUser()) {
        return <Navigate to={"/login"} replace={true}/>
    }
    return children
}