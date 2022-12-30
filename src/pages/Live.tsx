import {Base} from "@/components/Base";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Breadcrumb} from "@/components/Breadcrumb";
import React, {useEffect, useState} from "react";
import {LiveStatistics} from "@/components/LiveStatistics";
import {LIVE_URL} from "@/URLS";
import {LiveProps} from "@/Types";
import {
    Lightbulb,
    LocalGasStationOutlined,
    OilBarrelOutlined,
    Water
} from "@mui/icons-material";
import {LeafletLiveMarker} from "@/components/LeafletLiveMarker";
import {useAppContext} from "@/providers/AppProvider";


export const Live = () => {

    const [liveData, setLiveData] = useState<LiveProps>({} as LiveProps);
    const {user, currentCar} = useAppContext();
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
            console.log(data)
            setLiveData(data)
        }

        const interval = setInterval(fetchData, 1000)

        return () => clearInterval(interval)
    }, [currentCar])



    return (
        <Base>
            <div className="flex flex-col lg:flex-row gap-4 pt-2">
                <Breadcrumb page={1}/>
                <div className="flex flex-1 flex-row gap-4 justify-around content-center text-xl">
                    <div className={"my-auto"}><span className={"font-bold pr-2"}>Current Trip Time:</span>{liveData.timeOnTravel} sec</div>
                    <div className={"my-auto"}><span className={"font-bold"}>Current User:</span> V1cente</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pb-4">
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

                <div className="card shadow-xl lg:col-span-4 xl:col-span-3 bg-base-100">
                    <div className="card-body">
                        <div className={"card-title text-primary text-3xl"}>Current Location</div>
                        {/*<MapContainer className={"h-[40em]"} zoom={13} scrollWheelZoom={false} center={{lat:40.8668837,lng:-8.61874926}}>*/}
                        {/*    <TileLayer*/}
                        {/*        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
                        {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
                        {/*    />*/}
                        {/*    <LeafletLiveMarker positions={{lat:40.8668837,lng:-8.61874926}}/>*/}

                        {/*</MapContainer>*/}
                    </div>
                </div>

                <div className="col-3">
                    <div  className="stats stats-vertical shadow w-full">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <Lightbulb className={"text-primary"} sx={{fontSize: '5.5em'}}/>

                            </div>
                            <div className="stat-title">Lights</div>
                            <div className="stat-value">{liveData.lightdsState}</div>
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


            </div>
        </Base>
    )

}