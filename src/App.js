import classes from "./App.module.css";
import Header from "./components/header/Header";
import ToggleSwitch from "./components/header/ToggleSwitch";
import Search from "./components/search/Search";
import Card from "./components/UI/Card";
import MainWeather from "./components/weather/MainWeather";
import ExtendedForcast from "./components/weather/ExtendedForcast";
import { useSelector } from "react-redux";
import NavBar from "./components/header/NavBar";
function App() {
  let darkMode = useSelector((state) => state.mySearch.darkMode);

  let darkCard;
  if (darkMode) {
    darkMode = "darkBody";
    darkCard = "darkCard";
  } else {
    darkMode = "lightBody";
    darkCard = "lightCard";
  }
  return (
   
      <div className={darkMode}>
        {darkMode === "darkBody" ? (
          <style>{"body { background-color: rgb(5, 5, 41); }"}</style>
        ) : (
          <style>{"body { background-color: rgb(106, 173, 240); }"}</style>
        )}

        <div className={classes.headerAndToggle}>
          <div className={classes.header}>
            <Header />
          </div>
          
          <div className={classes.toggle}>
            <ToggleSwitch />
          </div>
        </div>
        <Search />
        <Card>
          <MainWeather />
        </Card>

        <Card>
          <ExtendedForcast />
        </Card>

        <p className={classes.Amir}>Developed by Amirhossein pooladi</p>
      </div>
  
  );
}

export default App;
