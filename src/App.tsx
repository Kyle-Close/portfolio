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
    typography: {
      fontFamily: "Montserrat, Arial, sans-serif", // Update this to your desired font family
    },
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
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
