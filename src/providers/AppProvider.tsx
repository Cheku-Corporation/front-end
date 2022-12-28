import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AppContextType, User} from "@/Types";


const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    const initialUser:User = {
        idUser: -1,
        name: '',
        email: '',
        token: '',
        groupId: -1,
        groupName: ''
    }

    const [user, setUser] = useState<User>(initialUser);


    const navigate = useNavigate();
    const logout = () => {
        setUser(initialUser);
    }

    const checkUser = () => {
        return user.token !== "";
    }

    return (
        <AppContext.Provider value={{user,setUser, logout,navigate,checkUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext) as AppContextType;