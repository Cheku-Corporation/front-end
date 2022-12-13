import {Base} from "@/components/Base";
import {useEffect, useState} from "react";

interface SpeedData {
    date: string,
    gear: number,
    velocity: number
}

export const SpeedDetails = () => {

    const [speedData, setSpeedData] = useState<SpeedData[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/car/1/velocities/100',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },

            }
        ).then(response => response.json())
            .then(data => {
                setSpeedData(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (<Base>
            <div className="overflow-x-auto">
                <p className={"text-primary text-3xl font-bold"}>Speed Log</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Speed</th>
                            <th>Gear</th>
                            {/*<th>RPM</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {speedData.map((data, index) => {
                            return (<tr key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.velocity.toFixed(2)}Km/h</td>
                                    <td>{data.gear}</td>
                                    {/*<td>{data.rpm}/pm</td>*/}
                                </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Base>)
}