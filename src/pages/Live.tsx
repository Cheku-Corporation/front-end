import {Base} from "@/components/Base";
import {Speed} from "@mui/icons-material";
import {Statistics} from "@/components/Statistics";
import {MapContainer, TileLayer} from "react-leaflet";
import {LeftletRoutingMachine} from "@/components/LeftletRoutingMachine";
import {Breadcrumb} from "@/components/Breadcrumb";
import {useState} from "react";
import {LiveStatistics} from "@/components/LiveStatistics";

export const Live = () => {

    const data = [
        [
            {
                name: "Current Speed",
                value: "123",
                unit: "Km/h",
                icon: Speed,
                iconColor: "primary",

            },
            {
                name: "Average Speed",
                value: "123",
                unit: "Km/h",
                icon: Speed,
                iconColor: "secondary"
            },
        ],

        [
            {
                name: "Relative Distance",
                value: "123",
                unit: "Km",
                icon: Speed,
                iconColor: "primary"

            },
            {
                name: "Total Distance",
                value: "123",
                unit: "Km",
                icon: Speed,
                iconColor: "secondary"

            }
        ],

        [
            {
                name: "Current Fuel Waste",
                value: "123",
                unit: "L/100Km",
                icon: Speed,
                iconColor: "primary"

            },
            {
                name: "Average Fuel Waste",
                value: "123",
                unit: "L/100Km",
                icon: Speed,
                iconColor: "secondary"
            }
        ]
    ]

    const [option, setOption] = useState(0)
    return (
        <Base>
            <div className="flex flex-col lg:flex-row gap-4 pt-2">
                <Breadcrumb page={1}/>
                <div className="flex flex-1 flex-row gap-4 justify-around content-center text-xl">
                    <div className={"my-auto"}><span className={"font-bold"}>Current Location:</span> Longe</div>
                    <div className={"my-auto"}><span className={"font-bold"}>Current User:</span> V1cente</div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pb-4">
                <LiveStatistics/>

                <div className="card shadow-xl lg:col-span-4 xl:col-span-2 bg-base-100">
                    <div className="card-body">
                        <div className={"card-title text-primary text-3xl"}>Current Location</div>
                        <MapContainer className={"h-[30em]"} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LeftletRoutingMachine/>
                        </MapContainer>
                    </div>
                </div>

                <div className="card shadow-xl lg:col-span-4 xl:col-span-2 bg-base-100">
                    <div className="card-body">
                        <div className={"card-title text-primary text-3xl"}>Tire Status</div>
                        <div className={"grid gap-3 grid-cols-2"}>
                            <div className="radial-progress"
                                 style={{"--value": "70", "--size": "12rem", "--thickness": "1em"}}>70%
                            </div>
                            <div className="radial-progress"
                                 style={{"--value": "70", "--size": "12rem", "--thickness": "1em"}}>70%
                            </div>
                            <div className="radial-progress"
                                 style={{"--value": "70", "--size": "12rem", "--thickness": "1em"}}>70%
                            </div>
                            <div className="radial-progress"
                                 style={{"--value": "70", "--size": "12rem", "--thickness": "1em"}}>70%
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Base>
    )

}