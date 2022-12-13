import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {useAppContext} from "@/providers/AppProvider";

export const LineChartCmp = () => {
    const [lineChartData, setLineChartData] = useState<any[]>([])
    const {user} = useAppContext();
    useEffect(() => {
        fetch('http://localhost:8080/api/car/1/velocities/100',
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
                    height={300}
                    data={lineChartData}
                    // margin={{
                    //     top: 5, right: 30, left: 20, bottom: 5
                    // }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
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