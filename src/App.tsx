import {Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
import {Landing} from "@/pages/Landing";
import {SpeedDetails} from "@/pages/SpeedDetails";
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
                <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                <Route path={"/live"} element={<ProtectedRoute><Live/></ProtectedRoute>}/>
                <Route path={"/car/speed"} element={<ProtectedRoute><SpeedDetails/></ProtectedRoute>}/>
                <Route path={"/info"} element={<ProtectedRoute><InfoCar/></ProtectedRoute>}/>
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/signCar"} element={<SignCar/>}/>
                <Route path={"*"} element={<Landing/>}/>
            </Routes>
    )
}

export default App
