import {LineChartCmp} from "@/components/charts/LineChartCmp";
import {Base} from "@/components/Base";
import {Statistics} from "@/components/Statistics";
import {Breadcrumb} from "@/components/Breadcrumb";
import {BarChartCmp} from "@/components/charts/BarChartCmp";
import {MapContainer, TileLayer} from "react-leaflet";
import {LeftletRoutingMachine} from "@/components/LeftletRoutingMachine";

export const Dashboard = () => {

    return (
        <Base>

            <div className={"flex flex-row pt-2  justify-between"}>
                <Breadcrumb/>

                <select defaultValue={1} className="select select-bordered max-w-xs">
                    <option>Last Trip</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">

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
                        <MapContainer className={"h-[60em]"} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LeftletRoutingMachine/>
                        </MapContainer>
                    </div>
                </div>

            </div>
        </Base>)
}

