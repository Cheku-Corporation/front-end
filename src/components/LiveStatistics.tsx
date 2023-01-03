import {
    LocalGasStationOutlined,
    SettingsOutlined,
    Speed,
    TireRepairOutlined
} from "@mui/icons-material";
import React from "react";
import {LiveStatisticsProps} from "@/Types";

export const LiveStatistics:React.FC<LiveStatisticsProps> = (props) => {


    const cards = [{
        id: 1, titles: ["Average Speed", "Current Speed"], icon: Speed, value: [props.averageSpeed,props.currentSpeed], unit: ["km/h","km/h"]
    }, {
        id: 2, titles: ["Current Gear", "Current RPM"], icon: SettingsOutlined, value: [props.currentGear,props.currentRPM], unit: ["","RPM"]
    }, {
        id: 3, titles: ["Total Distance", "Relative Distance"], icon: TireRepairOutlined, value: [props.totalDistance,props.relativeDistance], unit: ["Km","Km"]
    },

        {
            id: 4,
            titles: ["Tire Pressure", "Tire Temperature"],
            icon: LocalGasStationOutlined,
            value: [props.tiresPressure,props.tiresTemperature],
            unit: ["psi","°C"]
        },

    ]


    return (<>
            {cards.map((card, index) => {
                return (
                    <div key={index} className="stats stats-vertical lg:stats-horizontal lg:col-span-1 col-span-4 shadow  ">
                        <div className="stat-figure text-secondary inline  lg:hidden xl:inline">
                            <card.icon className={"text-primary"} sx={{fontSize: '6.5em'}}/>
                        </div>
                        <label className="swap">
                            <input type="checkbox"/>
                            <div className="stat swap-on ">
                                <div className="stat-title">{card.titles[0]}</div>
                                <div className="stat-value">{card.value[0]} {card.unit[0] !== "" ? card.unit[0] : ""}</div>
                            </div>

                            <div className="stat swap-off ">
                                <div className="stat-title">{card.titles[1]}</div>
                                <div className="stat-value">{card.value[1]} {card.unit[1] !== "" ? card.unit[1] : ""}</div>
                            </div>
                        </label>
                    </div>
                )
            })}
        </>
    )
}