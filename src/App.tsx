import "./App.css";
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <TitleSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
