import { NavLink } from "react-router";
import LogoSymbol from "./LogoSymbol";
import "./AppFooter.css";

function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="container">
                <div className="grid">
                    <div className="column">
                        <NavLink to="/" className="brand">
                            <LogoSymbol height={32} />
                            <span>Hotel Rienzbogen</span>
                        </NavLink>
                        <p className="text">
                            Valdaora / Olang, Val Pusteria<br />
                            Alto Adige — Sudtirolo
                        </p>
                    </div>

                    <div className="column">
                        <h4 className="column-title">Stagioni e Orari</h4>
                        <p className="text">
                            Stagione estiva: maggio – ottobre<br />
                            Stagione invernale: dicembre – aprile
                        </p>
                        <p className="text">
                            Check-in: 15:00 – 20:00<br />
                            Check-out: entro le 10:30
                        </p>
                    </div>

                    <div className="column">
                        <h4 className="column-title">Contatti</h4>
                        <p className="text">
                            Via del Bosco 14, 39030 Valdaora (BZ)<br />
                            <a href="tel:+390474000000" className="link">Tel. +39 0474 000000</a><br />
                            <a href="mailto:info@rienzbogen.example" className="link">info@rienzbogen.example</a>
                        </p>
                    </div>
                </div>

                <div className="bottom-bar">
                    <span>© 2025 Hotel Rienzbogen.</span>
                    <span>Progetto dimostrativo: l'Hotel Rienzbogen, i prezzi e le persone sono inventati.</span>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
