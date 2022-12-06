import {Navbar} from "@/components/Navbar";
import {Breadcrumb} from "@/components/Breadcrumb";

export const Base = ({children} : any) => {

    return (
        <div className={"bg-slate-200 h-full"}>
            <Navbar/>

            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}