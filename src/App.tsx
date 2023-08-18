import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const baseTheme = createTheme({
    typography: {
      fontFamily: "Montserrat, Arial, sans-serif",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
      },
    },
    //... other theme properties
  });

  const theme = createTheme({
    ...baseTheme,
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "body1" },
            style: {
              fontSize: "0.95rem",
              margin: "5px 0",
              [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.1rem",
                margin: "12px 0",
              },
              [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.2rem",
              },
            },
          },
          {
            props: { variant: "h3" },
            style: {
              fontFamily: "Roboto Slab",
              fontSize: "1.2rem",
              margin: "15px 0",
              [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.4rem",
                margin: "18px 0",
              },
              [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.6rem",
                margin: "18px 0",
              },
            },
          },
          {
            props: { variant: "h5" },
            style: {
              fontFamily: "Roboto Slab",
              fontSize: "1.1rem",
              margin: "12px 0",
              [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.2rem",
                margin: "13px 0",
              },
              [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.4rem",
                margin: "15px 0",
              },
            },
          },
          {
            props: { variant: "h6" },
            style: {
              fontFamily: "Roboto Slab",
              fontSize: "1rem",
              margin: "10px 0",
              [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.1rem",
                margin: "12px 0",
              },
              [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.3rem",
                margin: "15px 0",
              },
            },
          },
        ],
      },
    },
  });

  const StyledApp = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  }));

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  React.useEffect(() => {
    console.log("darkMode: ", darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <div className="app-wrapper">
          <Header handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
          <TitleSection darkMode={darkMode} />
          <AboutSection />
          <ProjectSection darkMode={darkMode} />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
