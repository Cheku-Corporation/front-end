import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
import {Landing} from "@/pages/Landing";
import {SpeedDetails} from "@/pages/SpeedDetails";
import {Live} from "@/pages/Live";
import {SignIn} from "@/pages/SignIn";
import React from "react";
import {SignCar} from "@/pages/SignCar";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/car/speed"} element={<SpeedDetails/>}/>
                <Route path={"/live"} element={<Live/>}/>
                <Route path={"*"} element={<Landing/>}/>
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/signCar"} element={<SignCar/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
