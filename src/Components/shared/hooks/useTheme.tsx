import { use } from "react";
import { ThemeContext } from "../../../contexts/themes/ContextTheme";

export const useTheme = () => {
    
  const contextTheme = use(ThemeContext);
  const { theme, setTheme } = contextTheme!;


  const handleToogleClick = (theme: string) => {
    setTheme(theme);
  };

  return {
    theme,

    handleToogleClick,
  };
};
