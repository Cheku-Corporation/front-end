import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import 'car-makes-icons/dist/style.css';
import {useState} from "react";

export const Breadcrumb = () => {
    const userCars = [{
        id: 0, name: "Audi TT", icon: "car-audi"
    }, {
        id: 1, name: "BMW M3", icon: "car-bmw"
    }, {
        id: 2, name: "Mercedes C63", icon: "car-mercedes"
    },]

    const options = [{
        id: 0, name: "Dashboard", icon: DashboardIcon
    }, {
        id: 1, name: "Settings", icon: SettingsIcon
    }, {
        id: 2, name: "About", icon: InfoIcon
    }]

    const [currentCar, setCurrentCar] = useState(userCars[0])
    const [currentOption, setCurrentOption] = useState(options[0])

    return (<div className="flex items-center">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost m-1 text-xl text-primary"><i
                className={`${currentCar.icon} text-4xl`}></i>{currentCar.name}</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {userCars.map((car) => (<li key={car.id}>
                    <a className={car.id === currentCar.id ? "bg-primary" : ""}
                       onClick={() => car.id !== currentCar.id ? setCurrentCar(car) : null}>
                        <i className={`${car.icon} text-4xl`}></i>
                        {car.name}
                    </a>
                </li>))}

            </ul>
        </div>
        <ArrowForwardIosIcon/>

        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-xl text-primary">
                <>
                    {currentOption.icon ? <currentOption.icon/> : null}
                    {currentOption.name}
                </>
            </label>

            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {options.map((option) => (<li key={option.id}>
                    <a className={option.id === currentOption.id ? "bg-primary" : ""}
                       onClick={() => option.id !== currentOption.id ? setCurrentOption(option) : null}>
                        <option.icon/>
                        {option.name}
                    </a>
                </li>))}


            </ul>
        </div>
    </div>)
}