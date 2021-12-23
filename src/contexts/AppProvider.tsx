import { ThemeProvider } from "styled-components/native";
import { theme } from "../styles/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
