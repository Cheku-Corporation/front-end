import {useFormik} from "formik";
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {useAppContext} from "@/providers/AppProvider";
import {ADD_CAR_URL, CAR_MODELS_URL} from "@/URLS";

export const RegisterCarForm = () => {
    const [cars,setCars] = useState<any[]>([])

    const [selectedCar, setSelectedCar] = useState(-1);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);

    const {user, navigate} = useAppContext();

    useEffect(() => {
        fetch(CAR_MODELS_URL(),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': user.token
                },
            }).then(response => response.json())
            .then(data => {
                setCars(data)
            }).catch(error => console.log(error))
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
            //check if model value is valid
            let carsModel = values.model.split(' ')
            let inspectionDateTimestamp = new Date(values.inpectionDate).getTime()
            let insuranceDateTimestamp = new Date(values.insuranceDate).getTime()
            if (carsModel.length === 3 && cars.filter(car => car.brand === carsModel[0] && car.model === carsModel[1] && car.year === carsModel[2]).length !== 0) {
                fetch(ADD_CAR_URL(),
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': user.token
                        },
                        body: JSON.stringify({
                            "carModel": {
                                "model": carsModel[1],
                            },
                            "matricula": values.matricula,
                            "inspectionDate": inspectionDateTimestamp,
                            "insuranceDate": insuranceDateTimestamp,
                            "group": {
                                "id": user.groupId
                            },
                            "userId": user.idUser
                        })
                    }).then(response => response.json())
                    .then(data => {
                        if (data.message) {
                            setErrors({submition: data.message})
                        }else {
                            navigate('/dashboard')
                        }

                    }).catch(error => console.log(error))
            } else {
                alert('Invalid model')
            }
        }
    })

    const handleSelectCar = (carId : number) => {
        setSelectedCar(carId);
        setSearchMenuOpen(false);
        formik.setFieldValue('model', cars[carId]);
        if (selectedCar != -1) {
            formik.setFieldValue('model', cars[selectedCar].brand + ' ' + cars[selectedCar].model + ' ' + cars[selectedCar].year);
        } else {
            formik.setFieldValue('model', '');
        }
    }

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

                <div className="dropdown">
                    <input id={"model"}
                           className={"input input-bordered  w-full"}
                           type="text" {...formik.getFieldProps('model')} placeholder="Model" onClick={() => setSearchMenuOpen(!searchMenuOpen)}
                    />
                    {searchMenuOpen &&
                    <ul tabIndex={0} className="w-full dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {cars
                            .filter(car => car.model.toLocaleLowerCase().includes(formik.values.model.toLowerCase().trim()) || car.brand.toLocaleLowerCase().includes(formik.values.model.toLowerCase().trim()))
                            .map((car:{brand:string,model:string, year:number}, index:number) => (
                                <li key={index}>
                                    <a className="dropdown-item" onClick={()=> handleSelectCar(index)}>
                                        {car.brand} {car.model} {car.year}
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    }
                </div>

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