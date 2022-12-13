import {Base} from "@/components/Base";
import {Breadcrumb} from "@/components/Breadcrumb";

enum CarFuelType {
    GASOLINE = "Gasoline",
    DIESEL = "Diesel",
    ELECTRIC = "Electric",
}

type car = {
    id: number,
    plate: string,
    dateofinspection: string,
    dateofinsurance: string,
    group: {
        id: number,
        name: string,
        isAdmin: number
    },
    model: {
        brand: string,
        model: string,
        year: number
        tankCapacity: number,
        type: CarFuelType,
        motor: {
            id: number,
            power: number,
            cubicCapacity: number,
            model: string,
        },
        tires: {
            id: number,
            brand: string,
            model: string
        }
    },
}


export const InfoCar = () => {

    const data = {
        id: 1,
        plate: "AB-CC-23",
        dateofinspection: "01-01-2021",
        dateofinsurance: "31-12-2021",
        group: {
            id: 1,
            name: "Group 1",
            isAdmin: 1
        },
        model: {
            brand: "Audi",
            model: "A3",
            year: 2019,
            tankCapacity: 50,
            type: CarFuelType.GASOLINE,
            motor: {
                id: 1,
                power: 100,
                cubicCapacity: 2000,
                model: "A3",
            },
            tires: {
                id: 1,
                brand: "Michelin",
                model: "Pilot Sport 4",
            }
        },
    }

    return (
        <Base>
            <div className={"flex flex-row pt-2 justify-between"}>
                <Breadcrumb page={2}/>
            </div>

            <div className={"flex flex-wrap gap-3"}>
                <div className={"card shadow-xl bg-base-100 w-8/12"}>
                    <div className={"card-body"}>
                        <div className={"card-title text-primary text-3xl"}>Car Information</div>
                        <div className={"flex-1 space-y-4"}>
                            <div className={"flex flex-row gap-x-3"}>
                                <div className={"text-primary font-extrabold text-xl"}>License Plate:</div>
                                <div className={"text-accent text-xl font-extralight"}>{data.plate}</div>
                            </div>
                            <div className={"flex flex-row gap-x-3"}>
                                <div className={"text-primary font-extrabold text-xl"}>Date of Inspection:</div>
                                <div className={"text-accent text-xl font-extralight"}>{data.dateofinspection}</div>
                            </div>
                            <div className={"flex flex-row gap-x-3"}>
                                <div className={"text-primary font-extrabold text-xl"}>Date of Insurance:</div>
                                <div className={"text-accent text-xl font-extralight"}>{data.dateofinspection}</div>
                            </div>

                            <div className={"flex flex-row gap-x-3"}>
                                <div className={"text-primary font-extrabold text-xl"}>Group:</div>
                                <div className={"text-accent text-xl font-extralight"}>{data.group.name}</div>
                            </div>

                            {data.group.isAdmin === 1 ? (
                                    <div className={"flex flex-row gap-x-3"}>
                                        <div className={"text-primary font-extrabold text-xl"}>GroupID:</div>
                                        <div
                                            className={"text-accent text-xl font-extralight"}>{btoa(data.group.name).replaceAll("=", "")}
                                        </div>
                                    </div>
                                )
                                : null}

                            <div className={"flex flex-row gap-x-3"}>
                                <div className={"text-primary font-extrabold text-xl"}>Model:</div>
                                <div className={"text-accent text-xl font-extralight"}>{data.model.brand} {data.model.model} {data.model.year}</div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={"card shadow-xl bg-base-100 w-3/12"}>
                    <div className={"card-body"}>
                        <div className={"card-title text-primary text-3xl"}>Danger Zone</div>
                        <div className={"flex-1 space-y-4 h-full"}>
                            <button className="btn btn-error w-full">Delete Car</button>
                            <button className="btn btn-error w-full">Edit Inspection Date</button>
                            <button className="btn btn-error w-full">Edit Insurance Date</button>
                        </div>
                    </div>
                </div>
            </div>
        </Base>)
}