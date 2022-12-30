import {LineChartCmp} from "@/components/charts/LineChartCmp";
import {Base} from "@/components/Base";
import {Statistics} from "@/components/Statistics";
import {Breadcrumb} from "@/components/Breadcrumb";
import {BarChartCmp} from "@/components/charts/BarChartCmp";
import {MapContainer, TileLayer} from "react-leaflet";
import {LeftletRoutingMachine} from "@/components/LeftletRoutingMachine";
import {useAppContext} from "@/providers/AppProvider";
import {useEffect, useRef, useState} from "react";
import {LAST_MONTH_URL, LAST_TRIP_URL, LAST_WEEK_URL} from "@/URLS";
import {DashboardProps} from "@/Types";


export const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState<DashboardProps | null>({} as DashboardProps);
    const {user, currentCar} = useAppContext();
    const options = [
        {
            id: 0,
            name: "Last Trip",
            f: LAST_TRIP_URL
        },
        {
            id: 1,
            name: "Last Week",
            f: LAST_WEEK_URL
        },
        {
            id: 2,
            name: "Last Month",
            f: LAST_MONTH_URL
        }
    ]

    const fetchDashData = async (func: (id: string) => string) => {
        try {
            const dashResponse = await fetch(func(currentCar), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },
            });
            return await dashResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }
    }

    const selectChangeHandler = async (event: any) => {
        const data = await fetchDashData(options[event.target.value].f);
        data.message === "Not enougth data to show" ? setDashboardData(null) : setDashboardData(data);
    }


    useEffect(() => {
        fetchDashData(LAST_TRIP_URL).then(
            data => data.message === "Not enougth data to show" ? setDashboardData(null) : setDashboardData(data)
        )

    }, [currentCar])

    useEffect(() => {
        return () => {
            resetSelect();
        }
    }, [])


    const selectRef = useRef<HTMLSelectElement>(null);
    const resetSelect = () => {
        if (selectRef.current) {
            selectRef.current.value = "0";
        }
    }


    return (
        <Base>

            <div className={"flex flex-row pt-2  justify-between"}>
                <Breadcrumb page={0}/>

                <select
                    defaultValue={1}
                    className="select select-bordered max-w-xs"
                    onChange={selectChangeHandler}
                    ref={selectRef}
                >
                    {options.map((option, index) => {
                        return <option key={index} value={index}>{option.name}</option>
                    })}

                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pb-4">
                {dashboardData ? <>
                    <Statistics
                        averageSpeed={dashboardData.averageSpeed}
                        totalDistance={dashboardData.totalDistance}
                        totalTime={dashboardData.totalTime}
                        fuelSpent={dashboardData.fuelSpent}
                        fuelConsumptionPer100km={dashboardData.fuelConsumptionPer100km}
                        previousHasData={dashboardData.previousHasData}
                        averageSpeedComparedToPrevious={dashboardData.averageSpeedComparedToPrevious}
                        totalDistanceComparedToPrevious={dashboardData.totalDistanceComparedToPrevious}
                        totalTimeComparedToPrevious={dashboardData.totalTimeComparedToPrevious}
                        fuelSpentComparedToPrevious={dashboardData.fuelSpentComparedToPrevious}
                        fuelConsumptionPer100kmComparedToPrevious={dashboardData.fuelConsumptionPer100kmComparedToPrevious}
                    />

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
                </> :
                    <div className={"card-title text-3xl pl-3"}>Not enough data to show</div>
                }
            </div>
        </Base>)
}

