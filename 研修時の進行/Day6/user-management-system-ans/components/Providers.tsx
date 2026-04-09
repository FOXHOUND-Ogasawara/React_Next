"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../styles/theme";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
