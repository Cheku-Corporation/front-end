import {LineChartCmp} from "@/components/charts/LineChartCmp";
import {Base} from "@/components/Base";
import {Statistics} from "@/components/Statistics";
import {Breadcrumb} from "@/components/Breadcrumb";
import {BarChartCmp} from "@/components/charts/BarChartCmp";
import {MapContainer, TileLayer} from "react-leaflet";
import {LeftletRoutingMachine} from "@/components/LeftletRoutingMachine";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import {useAppContext} from "@/providers/AppProvider";

export const Dashboard = () => {
    const {user} = useAppContext();


    return (
        <Base>
            <p>{JSON.stringify(user)}</p>
            <div className={"flex flex-row pt-2  justify-between"}>
                <Breadcrumb page={0}/>

                <select defaultValue={1} className="select select-bordered max-w-xs">
                    <option>Last Trip</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pb-4">

                <Statistics/>

                <div className="card shadow-xl lg:col-span-4 xl:col-span-2 bg-base-100">
                    <div className="card-body">
                        <LineChartCmp/>
                    </div>
                </div>

                <div className="card shadow-xl lg:col-span-4 xl:col-span-2 bg-base-100">
                    <div className="card-body">
                        <BarChartCmp/>
                    </div>
                </div>

                <div className="card shadow-xl lg:col-span-5 xl:col-span-3 bg-base-100">
                    <div className="card-body">
                        <div className={"card-title text-primary text-3xl"}>Last trip</div>
                        <MapContainer className={"h-[30em]"} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LeftletRoutingMachine/>
                        </MapContainer>
                    </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-1 flex flex-col space-y-3">
                    <div className="stats shadow-xl">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <DeviceThermostatIcon sx={{fontSize: '4.8em'}}/>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value">25.6K</div>
                        </div>
                    </div>
                    <div className="stats shadow-xl">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <DeviceThermostatIcon sx={{fontSize: '4.8em'}}/>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value">25.6K</div>
                        </div>
                    </div>
                    <div className="stats shadow-xl">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <DeviceThermostatIcon sx={{fontSize: '4.8em'}}/>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value">25.6K</div>
                        </div>
                    </div>

                    <div className="stats shadow-xl">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <DeviceThermostatIcon sx={{fontSize: '4.8em'}}/>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value">25.6K</div>
                        </div>
                    </div>
                </div>

            </div>
        </Base>)
}

