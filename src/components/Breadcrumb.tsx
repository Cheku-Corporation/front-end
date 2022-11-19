import WarehouseIcon from '@mui/icons-material/Warehouse';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DashboardIcon from '@mui/icons-material/Dashboard';
export const Breadcrumb = () => {
    return (
        <div className="text-3xl breadcrumbs pl-2">
            <ul>
                <li>
                    <a>
                        <WarehouseIcon/>
                        My Garage
                    </a>
                </li>
                <li>
                    <a>
                        <
                        DirectionsCarFilledIcon/>
                        Citroen C3
                    </a>
                </li>
                <li>
                    <DashboardIcon/>

                    Dashboard
                </li>
            </ul>
        </div>
    )
}