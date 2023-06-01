import { useState } from "react";
import classes from "../weather/Degree.module.css"
import { useDispatch } from "react-redux";
import { searchAction } from "../../store/search-slice";

import 'bootstrap/dist/css/bootstrap.css';

const Degree = () => {
  const dispatch=useDispatch();
  const [mode, setMode] = useState(true);


  const modeHandler = () => {
   setMode(mode=>!mode)
   dispatch(searchAction.changeDegreeMode());

  };
  return (
    <div>
      <div className="form-check form-switch">
        <input
          onClick={modeHandler}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          
          className={`form-check-label ${classes.title} `} 
          htmlFor="flexSwitchCheckDefault"
         
        >
          {mode?<p>F</p>:<p>C</p>}
        </label>
      </div>
    </div>
  );
};

export default Degree;
