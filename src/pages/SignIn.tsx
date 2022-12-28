import React from "react";
import {RegisterUserForm} from "@/components/forms/RegisterUserForm";
import {Link} from "react-router-dom";

export const SignIn = () => {

    return (
        <div className="h-screen">

            <div className="flex justify-center items-center h-full bg-base-200 bg-opacity-90">
                <div className="card shadow-xl w-3/6 bg-base-100">
                    <div className="card-body w-full">
                        <h2 className="card-title text-6xl">Sign In</h2>
                        {<RegisterUserForm/>}
                    </div>
                    <div className="text-center space-x-2 mb-5">
                        <p className="text-base">Already have an account?
                            <Link to={"/login"} replace className="text-primary font-bold pl-1">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}