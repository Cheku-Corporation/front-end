import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'leaflet/dist/leaflet.css'
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {AppProvider} from "@/providers/AppProvider";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
    <BrowserRouter>
        <AppProvider>
            <App/>
        </AppProvider>
    </BrowserRouter>

</React.StrictMode>)
