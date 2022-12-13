import React, {ContextType, createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
type User = {
    // id: string;
    // name: string;
    // email: string;
    token: string;
}

type AppContextType = {
    user: User;
    logout: () => void;
    login: (user: User) => void;
    navigate: (path: string) => void;
    checkUser: () => boolean;
}


const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    const initialUser = {

        token: "",

    }

    const [user, setUser] = useState<User>(initialUser);


    const navigate = useNavigate();
    const login = (user: User) => {
        setUser(user);
    }
    const logout = () => {
        setUser(initialUser);
    }

    const checkUser = () => {
        return user.token !== "";
    }

    return (
        <AppContext.Provider value={{user,login, logout,navigate,checkUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext) as AppContextType;