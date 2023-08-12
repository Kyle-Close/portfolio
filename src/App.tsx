import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
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
    console.log("Switch state: ");
    setDarkMode((prevDarkMode) => (prevDarkMode ? false : true));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <div className="app-wrapper">
          <Header handleThemeToggle={handleThemeToggle} />
          <TitleSection />
          <AboutSection />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
