import {LineChartCmp} from "@/components/charts/LineChartCmp";
import {Base} from "@/components/Base";
import {Statistics} from "@/components/Statistics";
import {Breadcrumb} from "@/components/Breadcrumb";
import {BarChartCmp} from "@/components/charts/BarChartCmp";
import {MapContainer, TileLayer} from "react-leaflet";
import {LeftletRoutingMachine} from "@/components/LeftletRoutingMachine";
import {useAppContext} from "@/providers/AppProvider";
import {useEffect, useState} from "react";


type DashboardProps = {
    averageSpeed: number,
    totalDistance: number,
    totalTime: number,
    coordinates: [{
        tripNumber: number,
        start: {
            latitude: number,
            longitude: number
        },
        end: {
            latitude: number,
            longitude: number
        }
    }],
}
export const Dashboard = () => {
    const {user} = useAppContext();


    const [dashboardData, setDashboardData] = useState<DashboardProps>({} as DashboardProps);

     useEffect(() => {
         fetchDashData ().then(
                data => {
                    setDashboardData(data)
                }
         )

     }, [])


    const fetchDashData =  async () => {
        try {
            const dashResponse = await fetch(`http://localhost:8080/api/lasttrip?carid=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },
            });
            return await dashResponse.json();
        } catch (error : any) {
            return {error: error.message};
        }
    }

    return (
        <Base>
            <div className={"flex flex-row pt-2  justify-between"}>
                <Breadcrumb page={0}/>

                <select defaultValue={1} className="select select-bordered max-w-xs">
                    <option>Last Trip</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pb-4">
                <Statistics speed={dashboardData.averageSpeed} distance={dashboardData.totalDistance} time={dashboardData.totalTime}/>

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

                <div className="card shadow-xl lg:col-span-6 xl:col-span-4 bg-base-100">
                    <div className="card-body">
                        <div className={"card-title text-primary text-3xl"}>Map</div>
                        <MapContainer className={"h-[40em]"} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {dashboardData.coordinates &&
                                <LeftletRoutingMachine coordinates={dashboardData.coordinates}/>
                            }
                        </MapContainer>
                    </div>
                </div>
            </div>
        </Base>)
}

