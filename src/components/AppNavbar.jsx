import { useState } from "react";
import { NavLink } from "react-router";

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("IT");

    function toggle() {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="topnav">
            <NavLink to="/" className="hotel-name" end onClick={closeMenu}>
                <img src="/hotel-rienzbogen-logo.jpg" alt="Hotel Rienzbogen Logo" className="nav-logo" />
                <span>Hotel <br></br> Rienzbogen</span>
            </NavLink>

            <nav className={`nav-menu ${isOpen ? "opened" : "closed"}`}>
                <NavLink to="/rooms" className="nav-link" onClick={closeMenu}>Camere</NavLink>
                <NavLink to="/services" className="nav-link" onClick={closeMenu}>Servizi</NavLink>
                <NavLink to="/contacts" className="nav-link" onClick={closeMenu}>Contatti</NavLink>
                <NavLink to="/contacts" className="btn-cta" onClick={closeMenu}>Richiedi disponibilità</NavLink>
            </nav>

            <div className="topnav-actions">
                <div className="lang-switch" role="group" aria-label="Selettore lingua">
                    {["IT", "DE", "EN"].map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={lang === item ? "active" : ""}
                            onClick={() => setLang(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={toggle}
                    className="icon"
                    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                    aria-expanded={isOpen}
                >
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </div>
        </header>
    );
}

export default AppNavbar;