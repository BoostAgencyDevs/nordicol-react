import { Outlet } from "react-router-dom";

import { NavBarDesktop, NavBarMobile } from "./Navbar";
import { Footer } from "./Footer";

import "../styles/Navbar.css";
import "../styles/Outlet.css";
import "../styles/Footer.css";

const Layout = () => {
    return (
        <div className="layout">
            <NavBarDesktop />
            <NavBarMobile />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;