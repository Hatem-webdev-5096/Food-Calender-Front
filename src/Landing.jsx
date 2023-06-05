import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./app.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [breakfastData, setBreakfastData] = useState(null);
  const [lunchData, setLunchData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const dayIndex = now.getDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayIndex];

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/getData");
      const resData = await response.json();
      setBreakfastData(resData.breakfast);
      setLunchData(resData.lunch);
    })();
  }, []);

  if (breakfastData && lunchData && hour <= 11) {
    window.location.replace(breakfastData[dayIndex][1]);
  } else if (breakfastData && lunchData && hour >= 11) {
   
    if(day < 8) {
        window.location.replace(lunchData[dayIndex][1]);
    } else if(day > 7 && day < 15) {
        window.location.replace(lunchData[dayIndex][2]);
    } else if (day > 14 && day < 21) {
        window.location.replace(lunchData[dayIndex][3]);
    } else if (day > 21) {
        window.location.replace(lunchData[dayIndex][4]);
    }
  }

  return (
    <div className={styles.loader}>
      <p>What shall we eat? </p>
      {isLoading ? <CircularProgress color="success" /> : null}
    </div>
  );
};

export default Landing;
