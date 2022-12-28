import {LoginForm} from "@/components/forms/LoginForm";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center items-center h-full bg-base-200 bg-opacity-90">
                <div className="card shadow-xl w-2/6 bg-base-100">
                    <div className="card-body w-full">
                        <h2 className="card-title text-6xl">Login</h2>
                        <LoginForm/>
                    </div>
                    <div className="text-center space-x-2 mb-5">
                        <p className="text-base">Don't have an account?
                            <Link to={"/signin"} replace className="text-primary font-bold pl-1">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}