// const HOST = import.meta.env.VITE_API_URL
const HOST ="http://localhost:8080"
//API DOCUMENTATION
// https://documenter.getpostman.com/view/13973483/2s8YzMY5S1#c0bfaa9f-cd03-4fb4-b4da-6cd3bd81daa2

export const REGISTER_URL = ( ) =>  `${HOST}/api/register`
export const LOGIN_URL = ( ) =>  `${HOST}/login`
export const USER_DATA_URL = (email:string) =>  `${HOST}/api/user/${email}`
export const CAR_MODELS_URL = ( ) =>  `${HOST}/api/carModels`
export const ADD_CAR_URL = ( ) =>  `${HOST}/api/car`
export const VELOCITIES_URL = (car:string,size:number) => `${HOST}/api/car/${car}/velocities/${size}`
export const LAST_TRIP_URL = (car:string) => `${HOST}/api/lasttrip?carid=${car}`
export const LAST_WEEK_URL = (car:string) => `${HOST}/api/lastweek?carid=${car}`
export const LAST_MONTH_URL = (car:string) => `${HOST}/api/lastmonth?carid=${car}`
export const LIVE_URL = (car: number | string) => `${HOST}/api/live?carid=${car}`
export const CAR_URL = (carId:string, userId:string|number, groupId:string|number) => `${HOST}/api/user/${userId}/group/${groupId}/car/${carId}`
export const USER_CARS_URL = (userId:string, groupId:string) => `${HOST}/api/user/${userId}/group/${groupId}/cars`

export const NOTIFICATIONS_URL = (groupId:string|number) => `${HOST}/api/group/${groupId}/notifications`
export const DELETE_NOTIFICATIONS_URL = (groupId:string|number,notificationId:string|number) => `${HOST}/api/group/${groupId}/notification/${notificationId}`

export const UPDATE_DATES_URL= (cardId:string|number) => `${HOST}/api/user/group/car/${cardId}/`