import {LoginForm} from "@/components/forms/LoginForm";

export const Login = () => {
    return (
        <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6">
            <h1 className="text-5xl font-bold mb-6 tracking-wider">Login</h1>
                <LoginForm/>
        </div>

    )
}