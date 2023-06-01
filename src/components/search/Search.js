import classes from "../search/Search.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../store/search-slice";

let weatherData = null;
let finalCityName;
const Search = () => {
  const [cityName, setCityName] = useState("");
  const [loadedData, setLoadedData] = useState(true);
  const [error, setError] = useState(true);
  const spinner = <p>Loading...</p>;
  let faildToFetch =<div className={classes.centered}>  <p>failed to fetch data,try again...</p></div>;

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      setLoadedData(false);
      await dataSearch();
      dispatch(searchAction.startSearch(weatherData));
      setLoadedData(true);
    }
    fetchData();
  }, []);

  const dataSearch = async () => {
    try {
      setError(true);
      const data = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${finalCityName}?key=LFYY4DMRZPKDG39NEA38X28DU`
      );
      weatherData = await data.json();
    } catch {
      setError(false);
    }
  };

  const changeInputHandler = (event) => {
    setCityName(event.target.value);

    console.log(cityName);
  };

  const submitHandler = async (event) => {
    setLoadedData(false);
    event.preventDefault();
    finalCityName = cityName;
    await dataSearch();

    dispatch(searchAction.startSearch(weatherData));
    setLoadedData(true);
  };

  return (
    <div>
    <div className={classes.centered}>
      <form onSubmit={submitHandler} className="row g-3">
        <div className="col-auto"></div>
        <div className="col-auto">
          <label htmlFor="inputSearch" className="visually-hidden">
            Password
          </label>
          <input
            type="input"
            className="form-control"
            id="inputSearch"
            placeholder="city"
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-auto">
          {!loadedData ? (
            spinner
          ) : (
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          )}
        </div>
      </form>
      
      
      
    </div>
    {!error ? faildToFetch : ""}
    </div>
  );
};

export default Search;
