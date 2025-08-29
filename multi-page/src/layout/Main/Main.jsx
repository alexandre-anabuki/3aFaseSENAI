import { Outlet } from "react-router";
import Header from "../Header/Header";


export default function Main(){
    return(
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto p-4">
                {/* aqui vai o corpo das páginas */}
                <Outlet />
            </main> 
        </div>
    )
}