import { NavLink } from "react-router";

function AppNavbar() {
    return (
        <div className="topnav">
            <NavLink to="/">Logo</NavLink>
            <div id="hotelLinks">
                <NavLink to="/rooms">Camere</NavLink>
                <NavLink to="/services">Servizi</NavLink>
                <NavLink to="/contacts">Contatti</NavLink>
            </div>
            <a href="javascript:void(0);" className="icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default AppNavbar;