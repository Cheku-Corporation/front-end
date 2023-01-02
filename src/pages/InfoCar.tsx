import {Base} from "@/components/Base";
import {Breadcrumb} from "@/components/Breadcrumb";
import {Car} from "@/Types";
import {CAR_URL} from "@/URLS";
import {useEffect, useState} from "react";
import {useAppContext} from "@/providers/AppProvider";


export const InfoCar = () => {

    const [data, setData] = useState({} as Car)
    const {user,currentCar,carList,setCarList,setCurrentCar,navigate} = useAppContext();
    const [error, setError] = useState<boolean>(false);
    const fetchCarData = async () => {
        try {
            const carResponse = await fetch(CAR_URL(currentCar, user.idUser, user.groupId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },
            });
            return await carResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }
    }


    const deleteCar = async () => {

        const response = await fetch(CAR_URL(currentCar, user.idUser, user.groupId), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + user.token
            }
        });
        const data = await response.json();

        setCarList(carList.filter((car) => car.id !== Number(currentCar)));
        if (data.hasOwnProperty("message")) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        } else {
            if (carList.length == 0) {
               setCurrentCar("-1")
            } else {
                setCurrentCar(String(carList[0].id));
                navigate('/dashboard')
            }
        }
    }

    useEffect(() => {
        fetchCarData().then(
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
    }, [currentCar])


    return (
        <Base>
            <div className={"flex flex-row pt-2 justify-between"}>
                <Breadcrumb page={2}/>
            </div>
            {data.id && (
                <div className={"grid grid-cols-5 gap-3"}>
                    <div className={"card shadow-xl bg-base-100 col-span-5 lg:col-span-3 "}>
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

                                {data.group.isAdmin === user.idUser && data.group.groupNameEncripted !== null ? (
                                        <div className={"flex flex-row gap-x-3"}>
                                            <div className={"text-primary font-extrabold text-xl"}>GroupID:</div>
                                            <div
                                                className={"text-accent text-xl font-extralight"}>{data.group.groupNameEncripted}
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
                    {data.group.isAdmin === user.idUser && (
                    <div className={"card shadow-xl bg-base-100 col-span-5 lg:col-span-2"}>
                        <div className={"card-body"}>
                            <div className={"card-title text-primary text-3xl"}>Danger Zone</div>
                            <div className={"flex-1 space-y-4 h-full"}>
                                <label htmlFor="delete-modal" className="btn btn-error w-full">Delete Car</label>
                                <button className="btn btn-error w-full">Edit Inspection Date</button>
                                <button className="btn btn-error w-full">Edit Insurance Date</button>
                            </div>
                        </div>
                    </div>
                    )}
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
            { error &&
                <div className="alert alert-error shadow-lg w-1/3 absolute bottom-2 left-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Error! Task failed successfully.</span>
                    </div>
                </div>
            }
        </Base>)
}