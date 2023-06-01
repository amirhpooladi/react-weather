import { Fragment, useEffect, useState } from "react";
import classes from "../weather/MainWeather.module.css";
import Degree from "./Degree";
import { useSelector } from "react-redux";

const MainWeather = () => {
  const cityName = useSelector((state) => state.mySearch.cityName);
  const temp = useSelector((state) => state.mySearch.temp);
  const conditions = useSelector((state) => state.mySearch.conditions);
  const humidity = useSelector((state) => state.mySearch.humidity);
  const wind = useSelector((state) => state.mySearch.wind);
  const pressure = useSelector((state) => state.mySearch.pressure);
  const celsios=useSelector((state)=>state.mySearch.celsios);
  return (
    <Fragment>
      <div className={classes.header}>
        <p className={classes.text}>current weather</p>
        <Degree />
      </div>
      <div className={classes.allSide}>
        <div className={classes.leftSide}>
          <p className={classes.cityName}>{cityName}</p>
          <div className={classes.skyAndDegree}>
            <div className={classes.icon}>
              <p>☀️</p>
            </div>
            <p className={classes.temp}>{celsios? Math.floor((temp - 32) / 1.8):temp}°</p>
          </div>
          <p className={classes.weatherCondition}>{conditions}</p>
        </div>

        <div className={classes.rightSide}>
          <p>feels like {celsios? Math.floor((temp - 32) / 1.8):temp}°</p>
          <div className={classes.upAndDown}>
            <p>
              {celsios? Math.floor((temp - 32) / 1.8) + 5:temp+5}°⬆---
              {celsios? Math.floor((temp - 32) / 1.8) - 5:temp-5}°⬇
            </p>
          </div>
          <p>💧 Humidity {humidity}  %</p>
          <p>💨 Wind {wind}  kph</p>
          <p>🧭 Pressure {pressure}  hpa</p>
          
          
        </div>
      </div>
    </Fragment>
  );
};

export default MainWeather;
