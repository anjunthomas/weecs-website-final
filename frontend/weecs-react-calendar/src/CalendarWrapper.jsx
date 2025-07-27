import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCalendar from "./Calendar";
import './styles/CalendarStyles.css'
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  return (
    <div id="calendar-section" className="calendar-wrapper">
      <h2 className="title">Join our next event!</h2>
      <div className="calendar-box">
        <MyCalendar />
      </div>
    </div>
  )
}

export default CalendarComponent