
export const Login = () => {
    return(
        <div className="bg-base-200 flex flex-col items-center justify-center h-screen text-primary-content">
            <div className="card shadow-xl bg-white">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox"/>
                            <span className="label-text-alt">Remember me</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}