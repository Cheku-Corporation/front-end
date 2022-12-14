import {Navbar} from "@/components/Navbar";

export const Base = ({children}: any) => {

    return (
            <div className={"min-h-screen bg-base-200 bg-opacity-90"}>
                <Navbar/>

                <div className="container mx-auto">
                    {children}
                </div>
            </div>
    )
}