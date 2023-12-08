import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Toaster />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;