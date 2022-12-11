import {useFormik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

export const RegisterCarForm = () => {

    //Create array of cars with name, model and year id
    const cars = [
        {id: 1, name: 'Audi', model: 'A4', year: 2019},
        {id: 1, name: 'Audi', model: 'A4', year: 2019},
        {id: 2, name: 'Citroen', model: 'C4', year: 2018},
        {id: 3, name: 'Ford', model: 'Fiesta', year: 2017},
        {id: 4, name: 'Honda', model: 'Civic', year: 2016},
        {id: 5, name: 'Hyundai', model: 'i30', year: 2015},
        {id: 6, name: 'Kia', model: 'Ceed', year: 2014},
        {id: 7, name: 'Mazda', model: '3', year: 2013},
        {id: 8, name: 'Mercedes', model: 'A-Class', year: 2012},
        {id: 9, name: 'Nissan', model: 'Micra', year: 2011},
        {id: 10, name: 'Peugeot', model: '208', year: 2010},
        {id: 11, name: 'Renault', model: 'Clio', year: 2009},
        {id: 12, name: 'Skoda', model: 'Fabia', year: 2008},
        {id: 13, name: 'Toyota', model: 'Yaris', year: 2007},
    ];


    const formik = useFormik({
        initialValues: {
            model: '',
            matricula: '',
            inpectionDate: '',
            insuranceDate: '',
        },
        validationSchema: Yup.object({
            model: Yup.string().required('Required'),
            matricula: Yup.string().matches(/^(([A-Z]{2}-\d{2}-(\d{2}|[A-Z]{2}))|(\d{2}-(\d{2}-[A-Z]{2}|[A-Z]{2}-\d{2})))$/,"Invalid Format").required('Required'),
            inpectionDate: Yup.date().required('Required'),
            insuranceDate: Yup.date().required('Required'),
        }),
        onSubmit: values => {
            //check if model value is valid
            let carsModel = values.model.split(' ')

            if (carsModel.length === 3 && cars.filter(car => car.name === carsModel[0] && car.model === carsModel[1] && car.year === parseInt(carsModel[2])).length !== 0) {
                alert(JSON.stringify(values, null, 2));
            } else {
                alert('Invalid model')
            }
        }
    })



    const [selectedCar, setSelectedCar] = useState(-1);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);

    const handleSelectCar = (carId : number) => {
        setSelectedCar(carId);
        setSearchMenuOpen(false);
        formik.setFieldValue('model', carId);
        if (selectedCar != -1)
            formik.setFieldValue('model', cars[selectedCar].name + ' ' + cars[selectedCar].model + ' ' + cars[selectedCar].year);
         else
            formik.setFieldValue('model', '');
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
                        {cars.filter(car =>
                                        car.model.toLocaleLowerCase().includes(formik.values.model.toLowerCase().trim())
                                        || car.name.toLocaleLowerCase().includes(formik.values.model.toLowerCase().trim())
                        ).slice(7).map((car) => (
                            <li key={car.id}>
                                <a className="dropdown-item" onClick={()=> handleSelectCar(car.id)}>
                                    {car.name} {car.model} {car.year}
                                </a>
                            </li>
                        ))}
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

            </div>
        </form>
    )
}