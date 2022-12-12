import {LocalGasStationOutlined, MovingOutlined, SettingsOutlined, Speed} from "@mui/icons-material";

export const LiveStatistics = () => {


    const cards = [{
        id: 1, titles: ["Average Speed", "Current Speed"], icon: Speed, value: "0", unit: "km/h"
    }, {
        id: 2, titles: ["Current Gear", "Current RPM"], icon: SettingsOutlined, value: "0", unit: ""
    }, {
        id: 3, titles: ["Total Distance", "Relative Distance"], icon: MovingOutlined, value: "123", unit: "Km"
    },

        {
            id: 4,
            titles: ["Average Fuel Comsuption", "Total Fuel Comsuption"],
            icon: LocalGasStationOutlined,
            value: "Casa",
            unit: ""
        },

    ]


    return (<>
            {cards.map((card, index) => {
                return (
                    <div key={index} className="stats stats-vertical lg:stats-horizontal shadow ">
                        <div className="stat-figure text-secondary">
                            <card.icon className={"text-primary"} sx={{fontSize: '6.5em'}}/>
                        </div>
                        <label className="swap">
                            <input type="checkbox"/>
                            <div className="stat swap-on ">
                                <div className="stat-title">{card.titles[0]}</div>
                                <div className="stat-value">{card.value} {card.unit !== "" ? card.unit : ""}</div>
                            </div>

                            <div className="stat swap-off ">
                                <div className="stat-title">{card.titles[1]}</div>
                                <div className="stat-value">{card.value} {card.unit !== "" ? card.unit : ""}</div>
                            </div>
                        </label>
                    </div>
                )
            })}
        </>
    )
}