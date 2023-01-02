import {Base} from "@/components/Base";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {Breadcrumb} from "@/components/Breadcrumb";
import React, {useEffect, useState} from "react";
import {LiveStatistics} from "@/components/LiveStatistics";
import {LIVE_URL} from "@/URLS";
import {LiveProps} from "@/Types";
import {Lightbulb, LocalGasStationOutlined, OilBarrelOutlined, Water} from "@mui/icons-material";
import {useAppContext} from "@/providers/AppProvider";
import humanizeDuration  from 'humanize-duration'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const Live = () => {

    const [liveData, setLiveData] = useState<LiveProps>({} as LiveProps);
    const {user, currentCar} = useAppContext();

    const [speedChart, setSpeedChart] = useState<[any]>([{"time": 0, "speed": 0}]);
    const [RPMChart, setRPMChart] = useState<[any]>([{"time": 0, "rpm": 0}]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(LIVE_URL(currentCar),
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + user.token
                    },
                })
            const data = await response.json()
            setLiveData(data)
            setSpeedChart((prev): any => {
               return [...prev, {"time": prev.length, "speed": data.currentSpeed}]
            })

            setRPMChart((prev): any => {
               return [...prev, {"time": prev.length, "rpm": data.currentRPM}]
            })
        }

        const interval = setInterval(fetchData, 1000)

        return () => clearInterval(interval)
    }, [currentCar])


    return (
        <Base>
            <div className="flex lg:flex-row gap-4 pt-2">
                <Breadcrumb page={1}/>
                <div className="flex text-xl">
                    {liveData.onTheRoad &&
                    <div className={"my-auto"}><span
                        className={"font-bold pr-2"}>Current Trip Time:</span>{humanizeDuration(liveData.timeOnTravel)}
                    </div>
                    }
                </div>
            </div>
            {liveData.onTheRoad ?
                <>
                    <div className="grid grid-cols-4 gap-3 pb-4">
                        <LiveStatistics
                            averageSpeed={liveData.averageSpeed}
                            currentGear={liveData.currentGear}
                            currentRPM={liveData.currentRPM}
                            currentSpeed={liveData.currentSpeed}
                            tiresTemperature={liveData.tiresTemperature}
                            relativeDistance={liveData.relativeDistance}
                            tiresPressure={liveData.tiresPressure}
                            totalDistance={liveData.totalDistance}

                        />

                        <div className="card shadow-xl col-span-4 xl:col-span-3  bg-base-100 mb-5 xl:m-0">
                            <div className="card-body">
                                <div className={"card-title text-primary text-3xl"}>Current Location</div>
                                {liveData.localization !== undefined && (
                                    <MapContainer className={"h-[30em]"} zoom={15} scrollWheelZoom={true}
                                                  center={[liveData.localization.latitude, liveData.localization.longitude]}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker
                                            position={[liveData.localization.latitude, liveData.localization.longitude]}/>
                                    </MapContainer>
                                )}
                            </div>
                        </div>
                        <div className="col-span-4 xl:col-span-1 ">
                            <div className="stats stats-vertical shadow w-full">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <Lightbulb className={"text-primary"} sx={{fontSize: '5.5em'}}/>

                                    </div>
                                    <div className="stat-title">Lights</div>
                                    <div className="stat-value">{liveData.lightsState}</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <Water className={"text-primary"} sx={{fontSize: '5.5em'}}/>
                                    </div>
                                    <div className="stat-title">Current Water</div>
                                    <div className="stat-value">{liveData.currentWaterPercentage}%</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <OilBarrelOutlined className={"text-primary"} sx={{fontSize: '5.5em'}}/>
                                    </div>
                                    <div className="stat-title">Current Oil</div>
                                    <div className="stat-value">{liveData.currentOilPercentage}%</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <LocalGasStationOutlined className={"text-primary"} sx={{fontSize: '5.5em'}}/>
                                    </div>
                                    <div className="stat-title">Current Fuel</div>
                                    <div className="stat-value">{liveData.currentFuelPercentage}%</div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-xl col-span-4 bg-base-100">
                            <div className="card-body">
                                <div className={"card-title text-primary text-3xl"}>Speed/Time</div>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                        height={300}
                                        data={speedChart}
                                    >
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="time" tick={false}/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Legend/>
                                        <Line
                                            type="monotone"
                                            dataKey="speed"
                                            stroke="#e0a82e"
                                            dot={false}
                                            isAnimationActive={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>

                            </div>
                        </div>
                    </div>
                </>
                :
                <div className={"card-title text-3xl pl-3"}>Not enough data to show</div>
            }


        </Base>
    )

}