import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  data: null,
  cityName: null,
  temp: null,
  conditions: null,
  humidity: null,
  wind: null,
  pressure: null,
  day0Condition: null,
  day0Temp: null,
  day1Condition: null,
  day1Temp: null,
  day2Condition: null,
  day2Temp: null,
  day3Condition: null,
  day3Temp: null,
  day4Condition: null,
  day4Temp: null,
  day5Condition: null,
  day5Temp: null,
  day6Condition: null,
  day6Temp: null,
  celsios:true,
  darkMode:true
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    startSearch(state, action) {
      state.data = action.payload;
      console.log(state.data);
      state.cityName = action.payload.resolvedAddress;
      state.temp = action.payload.currentConditions.temp;
      state.conditions = action.payload.currentConditions.conditions;
      state.humidity = action.payload.currentConditions.humidity;
      state.wind = action.payload.currentConditions.windspeed;
      state.pressure = action.payload.currentConditions.pressure;
      state.day0Condition = action.payload.days[0].conditions;
      state.day0Temp = action.payload.days[0].feelslike;
      state.day1Condition = action.payload.days[1].conditions;
      state.day1Temp = action.payload.days[1].feelslike;
      state.day2Condition = action.payload.days[2].conditions;
      state.day2Temp = action.payload.days[2].feelslike;
      state.day3Condition = action.payload.days[3].conditions;
      state.day3Temp = action.payload.days[3].feelslike;
      state.day4Condition = action.payload.days[4].conditions;
      state.day4Temp = action.payload.days[4].feelslike;
      state.day5Condition = action.payload.days[5].conditions;
      state.day5Temp = action.payload.days[5].feelslike;
      state.day6Condition = action.payload.days[6].conditions;
      state.day6Temp = action.payload.days[6].feelslike;
    },
    changeDegreeMode(state,action){
      state.celsios=!state.celsios;
    },
    changeThemeMode(state ,action){
      state.darkMode=!state.darkMode;
    }
  },
});

export default searchSlice.reducer;
export const searchAction = searchSlice.actions;
