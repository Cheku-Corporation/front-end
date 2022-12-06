import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
import {Landing} from "@/pages/Landing";
import {SpeedDetails} from "@/pages/SpeedDetails";
import {UserSetting} from "@/pages/UserSetting";
import {Live} from "@/pages/Live";
import {Testes} from "@/pages/Testes";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/car/speed"} element={<SpeedDetails/>}/>
                <Route path={"/settings"} element={<UserSetting/>}/>                <Route path={"/settings"} element={<UserSetting/>}/>
                <Route path={"/live"} element={<Live/>}/>
                <Route path={"/testes"} element={<Testes/>}/>
                <Route path={"*"} element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
