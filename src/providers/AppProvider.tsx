import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AppContextType, SimplifiedCar, User} from "@/Types";


const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    const initialUser:User = {
        idUser: -1,
        name: '',
        email: '',
        token: '',
        groupId: -1,
        groupName: '',
    }

    const [user, setUser] = useState<User>(initialUser);
    const [currentCar, setCurrentCar] = useState<string>("");
    const [carList, setCarList] = useState<SimplifiedCar[]>([]);
    const navigate = useNavigate();
    const logout = () => {
        setUser(initialUser);
        setCarList([]);
        setCurrentCar("");
        navigate('/login');
    }

    const checkUser = () => {
        return user.token !== "";
    }

    return (
        <AppContext.Provider value={{user,setUser, logout,navigate,checkUser, currentCar,setCurrentCar, carList,setCarList}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext) as AppContextType;