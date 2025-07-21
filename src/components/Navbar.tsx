import { useState } from "react";

export const NavBarDesktop = () => {
    return (
        <div className="navbar-desktop">
            <figure className="logo-container">
                <img src="./images/logo1.png" alt="Logo" width={100} className="logo" />
            </figure>
            <ul className="lists">
                <li className="list"><a href="#features">Características</a></li>
                <li className="list"><a href="#demo">Demo</a></li>
                <li className="list"><a href="#testimonials">Testimonios</a></li>
                <li className="list btn">Solicitar Demo</li>
            </ul>
        </div>
    );
};

export const NavBarMobile = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    return (
        <div className="navbar-mobile">
            <figure className="logo-container">
                <img src="./images/logo1.png" alt="Logo" width={100} className="logo" />
            </figure>
            <div className="menu-container" onClick={toggleMenu}>
                <i className="fa-solid fa-bars" id={showMenu ? "menu-white" : "menu-black"}></i>
            </div>
            <ul className={`lists ${showMenu ? "showMenu" : "hideMenu"}`}>
                <li className="list"><a href="#features" onClick={toggleMenu}>Características</a></li>
                <li className="list"><a href="#demo" onClick={toggleMenu}>Demo</a></li>
                <li className="list"><a href="#testimonials" onClick={toggleMenu}>Testimonios</a></li>
                <li className="list btn">Solicitar Demo</li>
            </ul>
        </div>
    );
};
    