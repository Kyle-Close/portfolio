import React from "react";
import "../../styles/Header/ThemeToggler.css";
import SunImg from "../../img/sun.svg";
import MoonImg from "../../img/moon.svg";

enum Theme {
  LIGHT,
  DARK,
}

function ThemeToggler() {
  const [selectedTheme, setSelectedTheme] = React.useState(Theme.DARK);

  function handleOnClick(e: any) {
    setSelectedTheme((prevTheme) => {
      return prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  }

  React.useEffect(() => {
    console.log(selectedTheme);
  }, [selectedTheme]);

  return (
    <div onClick={handleOnClick} className="toggler-container">
      <div
        className={`circle ${selectedTheme === Theme.DARK ? "dark" : "light"}`}
      ></div>
      <div className="light-img-container">
        <img src={SunImg}></img>
      </div>
      <div className="dark-img-container">
        <img src={MoonImg}></img>
      </div>
    </div>
  );
}

export default ThemeToggler;
