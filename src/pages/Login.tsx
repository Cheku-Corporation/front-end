import {LoginForm} from "@/components/forms/LoginForm";

export const Login = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center items-center h-full bg-base-200 bg-opacity-90">
                <div className="card shadow-xl w-2/6 bg-base-100">
                    <div className="card-body w-full">
                        <h2 className="card-title text-6xl">Login</h2>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>

    )
}