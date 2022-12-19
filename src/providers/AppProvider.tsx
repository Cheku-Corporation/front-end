import React, {ContextType, createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
export type User = {
    idUser: number;
    name: string;
    email: string;
    token: string;
    groupId: number;
    groupName: string;
}

type AppContextType = {
    user: User;
    logout: () => void;
    navigate: (path: string) => void;
    checkUser: () => boolean;
    setUser: (user: { idUser: number; groupName: string; groupId: number; name: string; email: string; token: string }) => void;
}


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