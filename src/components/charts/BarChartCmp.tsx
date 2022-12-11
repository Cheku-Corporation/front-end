import {CartesianGrid, Legend, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const BarChartCmp = () => {
    const data = [{
        name: 'Monday', speed: 4000,
    }, {
        name: 'Tuesday', speed: 3000
    }, {
        name: 'Wednesday', speed: 2000
    }, {
        name: 'Thursday', speed: 2780
    }, {
        name: 'Saturday', speed: 1890
    }, {
        name: 'Sunday', speed: 2390
    },];


    return (
        <>
            <h2 className="card-title text-primary text-3xl">Car Comsumption</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart height={300} data={data}>
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