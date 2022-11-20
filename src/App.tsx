import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Garage} from "@/pages/Garage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Garage/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
