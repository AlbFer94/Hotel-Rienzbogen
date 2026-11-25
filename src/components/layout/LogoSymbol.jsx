// src/components/LogoSymbol.jsx
import './LogoSymbol.css';

/**
 * Simbolo del brand Hotel Rienzbogen:
 * - Arco alpino (Bogen) in legno di cirmolo (--color-accent)
 * - Vette dolomitiche di Valdaora in verde bosco (--color-primary)
 * - Ansa fluida del fiume Rienza (Rienz)
 * 
 * Supporta la variante "inverse" per sfondi scuri (footer / hero).
 */
export default function LogoSymbol({ variant = 'default', height = 44, className = '' }) {
    const width = Math.round((height * 100) / 115);

    return (
        <svg
            className={`logo-symbol logo-symbol--${variant} ${className}`.trim()}
            viewBox="0 0 100 115"
            height={height}
            width={width}
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            {/* Vette montuose alpine in verde bosco (#193325 / --logo-green) */}
            <polyline
                className="logo-symbol__green-line"
                points="21,63 42,33 56,49 68,38 79,52"
                fill="none"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Arco alpino in legno di cirmolo (#81542e / --logo-wood) */}
            <path
                className="logo-symbol__wood-line"
                d="M 18,78 V 42 A 32,32 0 0 1 82,42 V 58 H 60"
                fill="none"
                strokeWidth="4.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Ansa fluida del fiume Rienza (Rienz) in legno di cirmolo */}
            <path
                className="logo-symbol__wood-fill"
                d="M 60,58
                   C 42,58 34,70 44,78
                   C 54,86 48,93 18,93
                   L 18,102
                   C 48,102 66,90 56,80
                   C 48,72 54,66 72,66
                   L 82,66
                   V 58
                   H 60
                   Z"
            />
        </svg>
    );
}