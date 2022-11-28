import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "@/pages/Dashboard";
import {Login} from "@/pages/Login";
// import {Landing} from "@/pages/Landing";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path={"/"} element={<Landing/>}/>*/}
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
