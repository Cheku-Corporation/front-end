import {useEffect} from "react";

export const Testes = () => {


    useEffect(() => {
        fetch('http://localhost:8080/api/car/1/velocities/100',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },

            }
        ).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])


    return(
        <div>teste</div>
    )
}