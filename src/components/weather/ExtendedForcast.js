import { Fragment } from "react";
import classes from "../weather/ExtendedForcast.module.css";

import { useSelector } from "react-redux";
const ExtendedForcast = () => {
  const day0Condition = useSelector((state) => state.mySearch.day0Condition);
  const day0Temp = useSelector((state) => state.mySearch.day0Temp);
  const day1Condition = useSelector((state) => state.mySearch.day1Condition);
  const day1Temp = useSelector((state) => state.mySearch.day1Temp);
  const day2Condition = useSelector((state) => state.mySearch.day2Condition);
  const day2Temp = useSelector((state) => state.mySearch.day2Temp);
  const day3Condition = useSelector((state) => state.mySearch.day3Condition);
  const day3Temp = useSelector((state) => state.mySearch.day3Temp);
  const day4Condition = useSelector((state) => state.mySearch.day4Condition);
  const day4Temp = useSelector((state) => state.mySearch.day4Temp);
  const day5Condition = useSelector((state) => state.mySearch.day5Condition);
  const day5Temp = useSelector((state) => state.mySearch.day5Temp);
  const day6Condition = useSelector((state) => state.mySearch.day6Condition);
  const day6Temp = useSelector((state) => state.mySearch.day6Temp);
  const celsios=useSelector((state)=>state.mySearch.celsios);

  return (
    <Fragment>
      <p className={classes.text}>extended forcast</p>
      <div className={classes.allDays}>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>sat </p>
          <p>☀️</p>
          <p>{day0Condition}</p>
          <p>{celsios? Math.floor((day0Temp - 32) / 1.8):day0Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>sun </p>
          <p>☀️</p>
          <p>{day1Condition}</p>
          <p>{celsios? Math.floor((day1Temp - 32) / 1.8):day1Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>mon </p>
          <p>☀️</p>
          <p>{day2Condition}</p>
          <p>{celsios? Math.floor((day2Temp - 32) / 1.8):day2Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>tue </p>
          <p>☀️</p>
          <p>{day3Condition}</p>
          <p>{celsios? Math.floor((day3Temp - 32) / 1.8):day3Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>wed</p>
          <p>☀️</p>
          <p>{day4Condition}</p>
          <p>{celsios? Math.floor((day4Temp - 32) / 1.8):day4Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>thr </p>
          <p>☀️</p>
          <p>{day5Condition}</p>
          <p>{celsios? Math.floor((day5Temp - 32) / 1.8):day5Temp}°</p>
        </div>
        <div className={classes.dayAndPic}>
          <p className={classes.eachDays}>fri </p>
          <p>☀️</p>
          <p>{day6Condition}</p>
          <p>{celsios? Math.floor((day6Temp - 32) / 1.8):day6Temp}°</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ExtendedForcast;
