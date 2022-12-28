import {Base} from "@/components/Base";
import {Breadcrumb} from "@/components/Breadcrumb";
import {Car} from "@/Types";
import {CAR_URL} from "@/URLS";
import {useEffect, useState} from "react";


export const InfoCar = () => {

    // const data: Car = {
    //     id: 1,
    //     matricula: "AB-CC-23",
    //     dateofinspection: "01-01-2021",
    //     dateofinsurance: "31-12-2021",
    //     group: {
    //         id: 1,
    //         name: "Group 1",
    //         isAdmin: 1
    //     },
    //     model: {
    //         brand: "Audi",
    //         model: "A3",
    //         year: 2019,
    //         tankCapacity: 50,
    //         type: CarFuelType.GASOLINE,
    //         motor: {
    //             id: 1,
    //             power: 100,
    //             cubicCapacity: 2000,
    //             model: "A3",
    //         },
    //         tires: {
    //             id: 1,
    //             brand: "Michelin",
    //             model: "Pilot Sport 4",
    //         }
    //     },
    // }

    const [data, setData] = useState({} as Car)


    const fetchCarData = async (id: string) => {
        try {
            const carResponse = await fetch(CAR_URL("1", "2", "1"), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Authorization': 'Bearer ' + user.token
                    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTY3Mjg2MTM1OH0.4SYrzbniJwrXAkbVoxXsPfs15-fqgU9y1YnZWNqUdPEcHeAKwpv3yxQicRNsOw6jloHAGwd6ltch9-0poNlqxw"
                },
            });
            return await carResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }
    }


    const deleteCar = async () => {
        const response = await fetch(CAR_URL("1", "2", "1"), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + user.token
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTY3Mjg2MTM1OH0.4SYrzbniJwrXAkbVoxXsPfs15-fqgU9y1YnZWNqUdPEcHeAKwpv3yxQicRNsOw6jloHAGwd6ltch9-0poNlqxw"
            }
        });
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        fetchCarData("1").then(
            (data) => {


                setData({
                    id: data.id,
                    matricula: data.matricula,
                    inspectionDate: new Date(data.inspectionDate).toLocaleDateString(),
                    insuranceDate: new Date(data.insuranceDate).toLocaleDateString(),
                    group: {
                        id: data.group.id,
                        groupName: data.group.groupName,
                        isAdmin: data.group.isAdmin,
                        groupNameEncripted: data.group.groupNameEncripted
                    },
                    carModel: {
                        brand: data.carModel.brand,
                        model: data.carModel.model,
                        year: data.carModel.year,
                        tankCapacity: data.carModel.tankCapacity,
                        type: data.carModel.type,
                        motor: {
                            id: data.carModel.motor.id,
                            power: data.carModel.motor.power,
                            displacement: data.carModel.motor.displacement,
                            model: data.carModel.motor.model,
                        },
                        tires: {
                            id: data.carModel.tires.id,
                            brand: data.carModel.tires.brand,
                            model: data.carModel.tires.model,
                        }
                    },
                });
            }
        )
    }, [])


    return (
        <Base>
            <div className={"flex flex-row pt-2 justify-between"}>
                <Breadcrumb page={2}/>
            </div>
            {data.id && (
                <div className={"flex flex-wrap gap-3"}>
                    <div className={"card shadow-xl bg-base-100 w-8/12"}>
                        <div className={"card-body"}>
                            <div className={"card-title text-primary text-3xl"}>Car Information</div>
                            <div className={"flex-1 space-y-4"}>
                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>License Plate:</div>
                                    <div className={"text-accent text-xl font-extralight"}>{data.matricula}</div>
                                </div>
                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Date of Inspection:</div>
                                    <div className={"text-accent text-xl font-extralight"}>{data.inspectionDate}</div>
                                </div>
                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Date of Insurance:</div>
                                    <div className={"text-accent text-xl font-extralight"}>{data.insuranceDate}</div>
                                </div>

                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Group:</div>
                                    <div className={"text-accent text-xl font-extralight"}>{data.group.groupName}</div>
                                </div>

                                {data.group.isAdmin === 1 && data.group.groupNameEncripted !== null ? (
                                        <div className={"flex flex-row gap-x-3"}>
                                            <div className={"text-primary font-extrabold text-xl"}>GroupID:</div>
                                            <div
                                                className={"text-accent text-xl font-extralight"}>{btoa(data.group.groupNameEncripted).replaceAll("=", "")}
                                            </div>
                                        </div>
                                    )
                                    : null}

                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Model:</div>
                                    <div
                                        className={"text-accent text-xl font-extralight"}>{data.carModel.brand} {data.carModel.model} {data.carModel.year}</div>
                                </div>

                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Power Motor:</div>
                                    <div
                                        className={"text-accent text-xl font-extralight"}>{data.carModel.motor.power}</div>
                                </div>


                                <div className={"flex flex-row gap-x-3"}>
                                    <div className={"text-primary font-extrabold text-xl"}>Motor Displacement:</div>
                                    <div
                                        className={"text-accent text-xl font-extralight"}>{data.carModel.motor.displacement}</div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className={"card shadow-xl bg-base-100 w-3/12"}>
                        <div className={"card-body"}>
                            <div className={"card-title text-primary text-3xl"}>Danger Zone</div>
                            <div className={"flex-1 space-y-4 h-full"}>
                                <label htmlFor="delete-modal" className="btn btn-error w-full">Delete Car</label>
                                <button className="btn btn-error w-full">Edit Inspection Date</button>
                                <button className="btn btn-error w-full">Edit Insurance Date</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <input type="checkbox" id="delete-modal" className="modal-toggle"/>
            <label htmlFor="delete-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Are you sure that you want to delete this car from the
                        database?</h3>
                    <p className="py-4">This action is irreversible! Think before you execute </p>
                    <div className="modal-action">
                        <label htmlFor="delete-modal" className="btn">Cancel</label>
                        <label htmlFor="delete-modal" className="btn btn-error"
                               onClick={() => deleteCar()}>Confirm</label>
                    </div>
                </label>
            </label>

        </Base>)
}