import {Base} from "@/components/Base";
import {Speed} from "@mui/icons-material";

export const Live = () => {

    const data = [
        [
            {
                name: "Current Speed",
                value: "123",
                unit: "Km/h",
                icon: Speed,
                iconColor: "primary",

            },
            {
                name: "Average Speed",
                value: "123",
                unit: "Km/h",
                icon: Speed,
                iconColor: "secondary"
            },
        ],

        [
            {
                name: "Relative Distance",
                value: "123",
                unit: "Km",
                icon: Speed,
                iconColor: "primary"

            },
            {
                name: "Total Distance",
                value: "123",
                unit: "Km",
                icon: Speed,
                iconColor: "secondary"

            }
        ],

        [
            {
                name: "Current Fuel Waste",
                value: "123",
                unit: "L/100Km",
                icon: Speed,
                iconColor: "primary"

            },
            {
                name: "Average Fuel Waste",
                value: "123",
                unit: "L/100Km",
                icon: Speed,
                iconColor: "secondary"
            }
        ]
    ]

    return (
        <Base>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 pt-2">

                {data.map((card, index) => {
                    return (
                        // <div className="stats stats-vertical shadow">
                        <div className="bg-base-100 grid grid-rows-3 grid-flow-col gap-4 text-xl">

                            {card.map((stat, index) => {
                                return (
                                    <div>
                                        {/*<div className="stat-figure text-primary">*/}
                                        {/*    <stat.icon className={`text-${stat.iconColor}`} sx={{fontSize: '4em'}}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="stat-title w-full">{stat.name}</div>*/}
                                        {/*<div className="stat-value text-primary">{stat.value}</div>*/}
                                        <div className="col-span-2 stat-title">{stat.name}</div>
                                        <div className="row-span-2 col-span-2 stat-value">{stat.value}</div>
                                    </div>

                                )
                            })}
                            {/*<div className="row-span-3 ..."><stat.icon className={`text-${stat.iconColor}`} sx={{fontSize: '4em'}}/></div>*/}
                            <div className="row-span-3 ..."><Speed className={`text-primay`} sx={{fontSize: '6em'}}/>
                            </div>
                        </div>
                    )

                })}
            </div>
        </Base>
    )

}