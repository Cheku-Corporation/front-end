const HOST =  "http://localhost:8080"

//API DOCUMENTATION
// https://documenter.getpostman.com/view/13973483/2s8YzMY5S1#c0bfaa9f-cd03-4fb4-b4da-6cd3bd81daa2

export const REGISTER_URL = ( ) =>  `${HOST}/register`
export const LOGIN_URL = ( ) =>  `${HOST}/login`


/**
 * URL to fetch all the velocities of a given car
 * @param car
 * @param size
 */
export const VELOCITIES_URL = (car:string,size:number) => `${HOST}/api/car/${car}/velocities/${size}`
