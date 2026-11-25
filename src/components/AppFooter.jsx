import { NavLink } from "react-router";
import LogoSymbol from "./layout/LogoSymbol";
import styles from "./layout/AppFooter.module.css";

function AppFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <NavLink to="/" className={styles.brand}>
                            <LogoSymbol height={32} />
                            <span>Hotel Rienzbogen</span>
                        </NavLink>
                        <p className={styles.text}>
                            Valdaora / Olang, Val Pusteria<br />
                            Alto Adige — Sudtirolo
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Stagioni e Orari</h4>
                        <p className={styles.text}>
                            Stagione estiva: maggio – ottobre<br />
                            Stagione invernale: dicembre – aprile
                        </p>
                        <p className={styles.text}>
                            Check-in: 15:00 – 20:00<br />
                            Check-out: entro le 10:30
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contatti</h4>
                        <p className={styles.text}>
                            Via del Bosco 14, 39030 Valdaora (BZ)<br />
                            <a href="tel:+390474000000" className={styles.link}>Tel. +39 0474 000000</a><br />
                            <a href="mailto:info@rienzbogen.example" className={styles.link}>info@rienzbogen.example</a>
                        </p>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <span>© 2025 Hotel Rienzbogen.</span>
                    <span>Progetto dimostrativo: l'Hotel Rienzbogen, i prezzi e le persone sono inventati.</span>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
