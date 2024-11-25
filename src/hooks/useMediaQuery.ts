import { useState, useEffect } from "react";
import { getTheme } from "@/styles/theme";
export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia(getTheme("light").mediaQuery.mobile).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);
  }, []);

  return { isMobile };
};
