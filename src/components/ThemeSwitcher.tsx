import React from "react";

import { TThemeName } from "../style/theme";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


interface Props {
  themeName: TThemeName;
  setThemeName: (themeName: TThemeName) => void;
}

export default function ThemeSwitcher() {
  const { toggleTheme, themeName } = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme(themeName);
  };
  return (
    <button onClick={handleClick}>
      {themeName === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
