import { createContext, useContext, useState } from "react";
import { TThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../style/theme";
import { GlobalStyle } from "../style/global";

interface IState {
  themeName: TThemeName;
  toggleTheme: (themeName: TThemeName) => void;
}

export const state: IState = {
  themeName: "light",
  toggleTheme: (themeName: TThemeName) => {},
};

export const ThemeContext = createContext<IState>(state);

export const BookStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<TThemeName>("light");

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
