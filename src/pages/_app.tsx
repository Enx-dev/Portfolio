import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, generalTheme, lightTheme } from "../styles/Theme/theme";
import { useState } from "react";
import { GlobalStyles } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import "@fontsource/open-sans";
import "@fontsource/poppins";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState("light");
  return (
    <ThemeProvider
      theme={
        mode === "light"
          ? { ...generalTheme, ...lightTheme }
          : { ...generalTheme, ...darkTheme }
      }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles
        styles={{
          ":root": {
            fontSize: "62.5%",
          },
          body: {
            fontSize: "1.6rem",
            boxSizing: "border-box",
            margin: "0",
            padding: "0",
          },
          a: {
            textDecoration: "none",
          },
        }}
      />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp;
