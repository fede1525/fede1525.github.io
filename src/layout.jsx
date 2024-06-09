import { useContext } from "react";
import Context from "../store/appContext.js";
import injectContext from "./store/appContext";
import Navbar from "../components/navbar.jsx";
import Landing from "../pages/Landing.jsx";

const Layout = () => {
    const store = useContext(Context)


    return (
        <div>
            <Navbar />
            <Route element={<Landing />} path=""/>
        </div>
    );
}

export default injectContext(Layout)