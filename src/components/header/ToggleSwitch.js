import { useState } from "react";
import classes from "../header/ToggleSwitch.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { searchAction } from "../../store/search-slice";

const ToggleSwitch = () => {
  const [mode, setMode] = useState(true);
  const dispatch=useDispatch();

  const modeHandler = () => {
   setMode(mode=>!mode)
   dispatch(searchAction.changeThemeMode());

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
          {mode?<p>Light</p>:<p>Dark</p>}
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
