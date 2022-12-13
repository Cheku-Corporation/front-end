const HOST =  "http://localhost:8080"


export const REGISTER_URL = ( ) =>  `${HOST}/register`
export const LOGIN_URL = ( ) =>  `${HOST}/login`


/**
 * URL to fetch all the velocities of a given car
 * @param car
 * @param size
 */
export const VELOCITIES_URL = (car:string,size:number) => `${HOST}/api/car/${car}/velocities/${size}`
