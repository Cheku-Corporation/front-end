import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
import {Landing} from "@/pages/Landing";
import {SpeedDetails} from "@/pages/SpeedDetails";
import {Live} from "@/pages/Live";
import {SignIn} from "@/pages/SignIn";


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
            </Routes>
        </BrowserRouter>
    )
}

export default App
