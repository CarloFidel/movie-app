import { useState } from "react";
import { ThemeContext } from "./ContextTheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  function toogletheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(toogletheme);
  // const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
