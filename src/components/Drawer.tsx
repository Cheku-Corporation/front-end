export const Drawer = ({children}) => {
    return (<div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-base-100 shadow-md">
                <div className="flex-none">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2 text-3xl"><span className={"btn btn-ghost uppercase base-content text-3xl"}>Cheku</span></div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://robohash.org/cheku" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className={"m-4"}>
                {children}
            </div>

        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li><a>Sidebar Item 1</a></li>
                <div className="divider"></div>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>)
}