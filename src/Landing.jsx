import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./app.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [breakfastData, setBreakfastData] = useState(null);
  const [lunchData, setLunchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeTable, setTimeTable] = useState(null);

  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const dayIndex = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

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
      const response = await fetch(
        "https://food-calender-server.onrender.com/getData"
        // "http://localhost:8000/getData"
      );
      const resData = await response.json();
      setBreakfastData(resData.breakfast);
      setLunchData(resData.lunch);
      setTimeTable({
        breakfast: {
          from: parseInt(resData.timeTable[0][1]),
          to: parseInt(resData.timeTable[0][2]),
        },
        lunch: {
          from: parseInt(resData.timeTable[1][1]),
          to: parseInt(resData.timeTable[1][2]),
        },
      });
    })();
  }, []);

  if (breakfastData && lunchData && timeTable) {
    if (hour < timeTable.breakfast.to) {
      window.location.replace(breakfastData[dayIndex][1]);
    } else if (hour >= timeTable.lunch.from && hour < timeTable.lunch.to) {
      if (day < 8) {
        window.location.replace(lunchData[dayIndex][1]);
      } else if (day > 7 && day < 15) {
        window.location.replace(lunchData[dayIndex][2]);
      } else if (day > 14 && day < 21) {
        window.location.replace(lunchData[dayIndex][3]);
      } else if (day > 21 && day < 29) {
        window.location.replace(lunchData[dayIndex][4]);
      }
    } else if (hour >= timeTable.breakfast.from) {
      window.location.replace(breakfastData[dayIndex + 1][1]);
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
