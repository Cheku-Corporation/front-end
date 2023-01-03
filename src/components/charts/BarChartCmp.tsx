import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {FUEL_CONSUMPTION_URL} from "@/URLS";
import {useAppContext} from "@/providers/AppProvider";

export const BarChartCmp = (props:{option:number}) => {

    const {user , currentCar} = useAppContext();
    const [barChartData, setBarChartData] = useState<any[]>([])
    useEffect(
        () => {
            const fetchData = async() => {
                try{
                    const response = await fetch(FUEL_CONSUMPTION_URL(currentCar,props.option == 1 ? "week" : "month"),
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'Authorization': user.token
                            }
                        })
                    const data = await response.json()
                    setBarChartData(data)
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        },[props.option])


    return (
        <>
            <h2 className="card-title text-primary text-3xl">Car Comsumption</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart height={300} data={Object.entries(barChartData)}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar
                        dataKey="speed"
                        fill="#e0a82e"
                    />
                </BarChart>
            </ResponsiveContainer>
        </>)
}