import { createContext, useContext, useEffect, useState } from "react";
import { TThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../style/theme";
import { GlobalStyle } from "../style/global";

interface IState {
  themeName: TThemeName;
  toggleTheme: (themeName: TThemeName) => void;
}

const DEFAULT_THEME_NAME: TThemeName = "light";
const THEME_KEY = "theme";

export const state: IState = {
  themeName: DEFAULT_THEME_NAME,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IState>(state);

export const BookStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<TThemeName>(DEFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem(THEME_KEY, themeName === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme: TThemeName = localStorage.getItem(THEME_KEY) as TThemeName;
    setThemeName(savedTheme || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
