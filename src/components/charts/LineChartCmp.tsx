import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {useAppContext} from "@/providers/AppProvider";
import {SPEED_INFORMATION_URL, VELOCITIES_URL} from "@/URLS";

export const LineChartCmp = (props:{value:number}) => {
    const [lineChartData, setLineChartData] = useState<any[]>([])
    const {user,currentCar} = useAppContext();
    useEffect(() => {
        fetch(VELOCITIES_URL(currentCar,props.value),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },

            }
        ).then(response => response.json())
            .then(data => {
                setLineChartData(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2 className="card-title text-primary text-3xl">Car Comsumption</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    height={400}
                    data={lineChartData}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date" tick={false}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line
                        type="monotone"
                        dataKey="velocity"
                        stroke="#e0a82e"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>)

}