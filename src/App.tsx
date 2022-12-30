import {Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
import {Landing} from "@/pages/Landing";
import {Live} from "@/pages/Live";
import {SignIn} from "@/pages/SignIn";
import React from "react";
import {SignCar} from "@/pages/SignCar";
import {InfoCar} from "@/pages/InfoCar";
import {ProtectedRoute} from "@/components/ProtectedRoute";


function App() {
    return (
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<ProtectedRoute page={Dashboard}/>}/>
                <Route path={"/live"} element={<ProtectedRoute page={Live}/>} />
                <Route path={"/info"} element={<ProtectedRoute page={InfoCar}/>} />
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/signCar"} element={<ProtectedRoute page={SignCar}/>}/>
                <Route path={"*"} element={<Landing/>}/>
            </Routes>
    )
}

export default App
