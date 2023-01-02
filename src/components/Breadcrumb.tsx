import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import 'car-makes-icons/dist/style.css';
import React, {useState} from "react";
import {Circle} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useAppContext} from "@/providers/AppProvider";

export const Breadcrumb = (props: { page: number }) => {

    const {carList, currentCar,setCurrentCar} = useAppContext();

    const options = [{
        id: 0, name: "Dashboard", icon: DashboardIcon
    }, {
        id: 1, name: "Live", icon: Circle
    }, {
        id: 3, name: "Info", icon: InfoIcon
    }]

    const [currentOption, setCurrentOption] = useState(options[props.page])

    let thisCar = carList.find((car) => car.id === Number(currentCar)) || carList[0];

    return (
        <div className="flex items-center flex-1 mb-5 xl:m-0">
            <div className="dropdown">
                <label tabIndex={0}
                       className="btn btn-ghost m-1 text-xl pr-2 text-primary">
                    <i className={`car-${thisCar.brand.toLowerCase()} text-4xl`}></i>
                    <span className={"hidden lg:inline"}>{thisCar.model}</span>
                </label>
                <ul tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
                    {carList.map((car) => (
                        <li key={car.id}>
                            <Link
                                to={`/${currentOption.name.toLowerCase()}`}
                                className="menu-link"
                                onClick={() => car.id ? setCurrentCar(String(car.id)) : null}>
                                    <i className={`car-${car.brand.toLowerCase()} text-4xl`}></i>
                                        {car.model}
                            </Link>
                        </li>
                        )
                    )}
                </ul>
            </div>
            <ArrowForwardIosIcon/>

            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost text-xl text-primary">
                        {currentOption.icon ? <currentOption.icon/> : null}
                    {currentOption.name}
                </label>

                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {options.map((option,index) => (
                    <li key={option.id}>
                            <Link to={"/"+options[index].name.toLowerCase()} className={option.id === currentOption.id ? "bg-primary" : ""}
                                  onClick={() => option.id !== currentOption.id ? setCurrentOption(option) : null}>
                                <option.icon/>
                                {option.name}
                            </Link>
                    </li>))}
                </ul>
            </div>
        </div>)
}