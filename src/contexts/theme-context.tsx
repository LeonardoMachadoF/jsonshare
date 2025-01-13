"use client";
import { useState, useEffect, createContext, useContext } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark";
        const systemTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const initialTheme = storedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        if (theme) {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.replace(theme, newTheme);
        }
    };

    if (!theme) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
