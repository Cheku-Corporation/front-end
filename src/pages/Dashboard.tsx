import {Speed, LocalGasStation, Place, DeviceThermostat} from "@mui/icons-material";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Breadcrumb} from "@/components/Breadcrumb";
import React from "react";


export const Dashboard = () => {

    const cards = [{
        id: 1, title: "Speed", icon: Speed, value: "0", unit: "km/h", color: "bg-primary"
    }, {
        id: 2, title: "Fuel", icon: LocalGasStation, value: "0", unit: "L", color: "bg-white"
    },
        {
            id: 3, title: "Current Location", icon: Place, value: "Casa", unit: "", color: "bg-gray-200"
        },

        {
            id: 4, title: "Temperature", icon: DeviceThermostat, value: "0", unit: "ºC", color: "bg-yellow-400"
        },

    ]

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (<>
            <Breadcrumb/>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {cards.map(( card,index) => {
                    return (
                        <div key={index} className={`bg-base-100 card shadow-xl`}>
                            <div className="card-body">
                                <h2 className="card-title text-primary text-3xl">{card.title}</h2>
                                <div className="flex justify-center items-center">
                                    <p className="card-subtitle text-6xl">{card.value}{card.unit}</p>
                                    <card.icon className={"text-primary-content"} sx={{fontSize: '6.5em'}} />
                                </div>
                            </div>
                        </div>)
                })}
            </div>
            <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="card shadow-xl xl:col-span-2">
                    <div className="card-body">
                        <h2 className="card-title text-primary text-3xl">Car Comsumption</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary text-3xl pb-2">Reminders</h2>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <p className="card-subtitle text-xl ">Revisão</p>
                                <div className="badge badge-success gap-2 text-lg"></div>
                            </div>
                        </div>
                        <div className="divider"></div>

                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <p className="card-subtitle text-xl ">Selo</p>
                                <div className="badge badge-success gap-2 text-lg"></div>
                            </div>
                        </div>
                        <div className="divider"></div>

                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <p className="card-subtitle text-xl ">Seguro</p>
                                <div className="badge badge-success gap-2 text-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>)
}

