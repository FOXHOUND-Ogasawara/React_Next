import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import "../styles/globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Navbar />
          <Container sx={{ mt: 4 }}>{children}</Container>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
