import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import 'car-makes-icons/dist/style.css';
import React, {useEffect, useState} from "react";
import {Circle} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {USER_CARS_URL} from "@/URLS";

export const Breadcrumb = (props: { page: number }) => {
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
        id: 1, name: "Live", icon: Circle
    }, {
        id: 3, name: "Info", icon: InfoIcon
    }]

    const [currentCar, setCurrentCar] = useState(userCars[0])
    const [currentOption, setCurrentOption] = useState(options[props.page])


    const fetchCars = async () => {
        try {
            const carsResponse = await fetch(USER_CARS_URL("2","1"), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Authorization': 'Bearer ' + user.token
                    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTY3Mjg2MTM1OH0.4SYrzbniJwrXAkbVoxXsPfs15-fqgU9y1YnZWNqUdPEcHeAKwpv3yxQicRNsOw6jloHAGwd6ltch9-0poNlqxw"
                },
            });
            return await carsResponse.json();
        } catch (error: any) {
            return {error: error.message};
        }
    }


    useEffect(() => {
        fetchCars().then(
            data => //setCurrentCar(data[0])
            console.log(data)
        )
    }, [])

    return (
        <div className="flex items-center">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost m-1 text-xl text-primary"><i
                    className={`${currentCar.icon} text-4xl`}></i>{currentCar.name}</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {userCars.map((car, index) => (<li key={car.id}>
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
                        {currentOption.icon ? <currentOption.icon/> : null}
                        {currentOption.name}
                </label>

                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {options.map((option,index) => (<li key={option.id}>
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