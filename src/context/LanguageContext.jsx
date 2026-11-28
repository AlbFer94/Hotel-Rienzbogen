import { createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lingua, setLingua] = useState("it");

    return (
        <LanguageContext.Provider value={{ lingua, setLingua }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext;