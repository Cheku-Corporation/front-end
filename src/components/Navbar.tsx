import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useAppContext} from "@/providers/AppProvider";
import {DELETE_NOTIFICATIONS_URL, NOTIFICATIONS_URL} from "@/URLS";
import ClearIcon from '@mui/icons-material/Clear';
import {NotificationPriority} from "@/Types";

export const Navbar = () => {

    const {user,logout,currentCar,notificationList,setNotificationList} = useAppContext();

    //TODO: "api/car/{car_id}/notifications"

    const fetchNotifications = async () => {
        try {
            const response = await fetch(NOTIFICATIONS_URL(user.groupId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': user.token
                },
            });
            const data = await response.json();
            setNotificationList(data);

        } catch (error: any) {
            return {error: error.message};
        }
    }

    const deleteNotification = async (id: number) => {
        try {
            const response = await fetch(DELETE_NOTIFICATIONS_URL(user.groupId,id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': user.token
                },
            });
            const data = await response.json();
            setNotificationList(notificationList.filter((notification) => notification.id !== id));
        } catch (error: any) {
            return {error: error.message};
        }
    }

    useEffect(() => {
        const interval = setInterval(fetchNotifications, 1000)

        return () => clearInterval(interval)
    }, [currentCar])


    return (
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-30">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl">Cheku</a>
            </div>
            <div className="flex-none gap-2">


                <div className="dropdown dropdown-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <div className="badge badge-xs badge-primary indicator-item">{notificationList.length}</div>

                        </div>
                    </button>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-72">
                        {notificationList.length > 0 ? notificationList.map((notification,index) => (
                            <li key={index} className={"flex"}>
                                <div className="flex">
                                    <div className={`badge badge-md badge-${NotificationPriority[notification.priority]}`}></div>
                                    <a>{notification.message}</a>
                                    <a onClick={() => deleteNotification(notification.id)}><ClearIcon/></a>
                                </div>
                            </li>
                        )):
                            <li>
                                <a>No notifications</a>
                            </li>
                        }


                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={`https://robohash.org/${user.name}`} alt={"avatar"} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                           <Link to={"/signcar"}>
                                Add car
                           </Link>
                        </li>
                        <li >
                            <a onClick={()=> logout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}