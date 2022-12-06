import {MovingOutlined, LocalGasStationOutlined, PlaceOutlined, Speed} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const Statistics = () => {


    const cards = [{
        id: 1, title: "Average Speed", icon: Speed, value: "0", unit: "km/h"
    }, {
        id: 2, title: "Total Distance", icon: MovingOutlined, value: "0", unit: "Km"
    }, {
        id: 3, title: "Fuel Spent", icon: LocalGasStationOutlined, value: "123", unit: "L"
    },

        {
            id: 4, title: "Current Location", icon: PlaceOutlined, value: "Casa", unit: ""
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
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}