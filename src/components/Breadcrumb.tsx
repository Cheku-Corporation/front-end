import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import 'car-makes-icons/dist/style.css';
export const Breadcrumb = () => {
    return (
        <div className="flex items-center">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost m-1 text-xl"><i className="car-audi text-4xl"></i>Audi TT</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><i className="car-bmw text-4xl"></i>BMW</a></li>
                    <li><a><i className="car-porsche text-4xl"></i>Porshe</a></li>
                </ul>
            </div>
            <ArrowForwardIosIcon/>

            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost text-xl"><DashboardIcon/> Dashboard</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><SettingsIcon/>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}