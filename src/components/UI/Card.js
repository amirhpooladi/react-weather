import   "../UI/Card.module.css";

import { useSelector } from "react-redux";

const Card = (props) => {
  let darkMode=useSelector((state)=>state.mySearch.darkMode);
  if(darkMode){
    darkMode="darkCard"
  }else{
    darkMode="lightCard";
  }
  return <div className={darkMode}>{props.children}</div>;
};

export default Card;
