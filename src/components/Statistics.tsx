import {MovingOutlined, LocalGasStationOutlined, Speed, AccessTimeOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import React from "react";
import {StatisticsProps} from "@/Types";

export const Statistics:React.FC<StatisticsProps> = (props:StatisticsProps) => {


    const cards = [{
        id: 1, title: "Average Speed", icon: Speed, value: props.averageSpeed, relativeValue: props.averageSpeedComparedToPrevious, unit: "km/h"
    }, {
        id: 2, title: "Total Distance", icon: MovingOutlined, value: props.totalDistance, relativeValue: props.totalDistanceComparedToPrevious , unit: "Km"
    }, {
        id: 3, title: "Fuel Spent", icon: LocalGasStationOutlined, value: props.fuelSpent, relativeValue: props.fuelSpentComparedToPrevious, unit: "L"
    },

        {
            id: 4, title: "Total Time", icon: AccessTimeOutlined, value: props.totalTime, relativeValue: props.totalTimeComparedToPrevious, unit: ""
        },

    ]


    return (<>
            {cards.map((card, index) => {

                return (
                    <div key={index} className="stats stats-vertical lg:stats-horizontal shadow">
                        <Link to={"/car/speed"} key={index}>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <card.icon className={"text-primary"} sx={{fontSize: '6.5em'}}/>
                                </div>
                                <div className="stat-title">{card.title}</div>
                                <div className="stat-value">{card.value} {card.unit !== "" ? card.unit : ""}</div>
                                {card.relativeValue !== null && card.relativeValue !== undefined &&
                                    <div className="stat-desc">{Math.abs(card.relativeValue)} {card.relativeValue > 0 ?  "more" : "less"} than last</div>
                                }
                            </div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}