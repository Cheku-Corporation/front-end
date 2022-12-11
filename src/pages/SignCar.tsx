import React from "react";
import {RegisterCarForm} from "@/components/forms/RegisterCarForm";

export const SignCar = () => {

    return (
        <div className="h-screen">

            <div className="flex justify-center items-center h-full bg-base-200 bg-opacity-90">
                <div className="card shadow-xl w-3/6 bg-base-100">
                    <div className="card-body w-full">
                        <h2 className="card-title text-6xl">Sign Car</h2>
                        <RegisterCarForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}