import {useFormik} from "formik";
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {useAppContext} from "@/providers/AppProvider";
import {ADD_CAR_URL, CAR_MODELS_URL} from "@/URLS";

export const RegisterCarForm = () => {
    const [cars,setCars] = useState<any[]>([])

    const {user, navigate,setCurrentCar,setCarList, carList} = useAppContext();

    const fetchCarModels = async () => {
        try {
            const carModelsResponse = await fetch(CAR_MODELS_URL(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                },
            });
            return await carModelsResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }
    }


    const addCar = async (values: any) => {
        try {
            const addCarResponse = await fetch(ADD_CAR_URL(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': user.token
                },
                body: JSON.stringify(
                    {
                        "carModel": {
                            "model": values.model,
                        },
                        "matricula": values.matricula,
                        "inspectionDate":  new Date(values.inpectionDate).getTime(),
                        "insuranceDate":  new Date(values.insuranceDate).getTime(),
                        "group": {
                            "id": user.groupId
                        },
                        "userId": user.idUser

                    }
                )
            });
            return await addCarResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }


    }

    useEffect(() => {
        fetchCarModels().then((data)=> {
            setCars(data)
        })

    }, [])



    const formik = useFormik({
        initialValues: {
            model: '',
            matricula: '',
            inpectionDate: '',
            insuranceDate: '',
            submition:'',
        },
        validationSchema: Yup.object({
            model: Yup.string().required('Required'),
            matricula: Yup.string().matches(/^(([A-Z]{2}-\d{2}-(\d{2}|[A-Z]{2}))|(\d{2}-(\d{2}-[A-Z]{2}|[A-Z]{2}-\d{2})))$/,"Invalid Format").required('Required'),
            inpectionDate: Yup.date().required('Required'),
            insuranceDate: Yup.date().required('Required'),
        }),
        onSubmit: (values, {setErrors}) => {
            addCar(values).then((data)=>{
                if(data.message){
                    setErrors({submition: data.message})
                }else{
                    setCurrentCar(data.id)
                    if (carList.length !== 0) {
                        setCarList([...carList, {id: data.id, model: data.carModel.model,brand: data.carModel.brand}])
                    } else {
                        setCarList([{id: data.id, model: data.carModel.model,brand: data.carModel.brand}])
                    }
                    navigate('/dashboard')
                }
            })
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} autoComplete={"off"}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Matricula</span>
                    <span className="label-text-alt text-error">
                        {formik.touched.matricula ? formik.errors.matricula : null}
                    </span>
                </label>
                <input type="text" placeholder="AA-11-AA"
                       className="input input-bordered" {...formik.getFieldProps('matricula')}/>

                <label className="label">
                    <span className="label-text">Modelo</span>
                    <span className="label-text-alt text-error">
                        {formik.touched.model ? formik.errors.model : null}
                    </span>
                </label>

                <select className={"select select-bordered"} {...formik.getFieldProps('model')}>
                    <option defaultChecked={true}>Car Model</option>
                    {cars.map((car, index) => (
                        <option key={index} value={car.carModel}>{car.carBrand} {car.carModel} {car.year}</option>
                    ))}
                </select>


                <label className="label">
                    <span className="label-text">Data de inspeção</span>
                    <span className="label-text-alt text-error">
                        {formik.touched.inpectionDate ? formik.errors.inpectionDate : null}
                    </span>
                </label>
                <input type="date" placeholder="Data de inspeção"
                          className="input input-bordered" {...formik.getFieldProps('inpectionDate')}/>
                <label className="label">
                    <span className="label-text">Data de seguro</span>
                    <span className="label-text-alt text-error">
                        {formik.touched.insuranceDate ? formik.errors.insuranceDate : null}
                    </span>
                </label>
                <input type="date" placeholder="Data de seguro"
                       className="input input-bordered" {...formik.getFieldProps('insuranceDate')}/>

                <button type="submit" className="btn btn-primary mt-6">Submit</button>
                {formik.errors.submition &&
                    <div className={"text-error mt-2"}>{formik.errors.submition}</div>}

            </div>
        </form>
    )
}