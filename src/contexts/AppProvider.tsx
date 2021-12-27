import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
