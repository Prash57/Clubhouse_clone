import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "../style/upcoming.module.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
// import Calendar from 'react-nepali-calendar';

export default function Upcoming() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header />
      <Link exact to="/home" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <div className={style.CalendarContainer}>
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
}


