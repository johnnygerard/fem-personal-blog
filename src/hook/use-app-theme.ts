import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (context) return context;
  throw new Error("Context provider not found");
};
