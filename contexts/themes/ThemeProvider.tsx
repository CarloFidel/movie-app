import { useState } from "react";
import { ThemeContext } from "./ContextTheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toogletheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

 // const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext value={{theme, setTheme}}>{children}</ThemeContext>;
};
