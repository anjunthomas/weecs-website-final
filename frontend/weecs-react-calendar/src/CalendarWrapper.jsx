import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCalendar from "./Calendar";
import LightningBolt from "./LightningBolt";
import './styles/CalendarStyles.css'
import 'react-calendar/dist/Calendar.css';
import './index.css';

const CalendarComponent = () => {
  return (
    <div id="calendar-section" className="calendar-wrapper">
      <h2 className="title text-4xl font-bold text-rose-800 mb-6">Join our next event!</h2>
      
       {/* Left Lightning */}
      <LightningBolt/>
      
      <div className="calendar-box">
        <MyCalendar />
      </div>

      {/* Right Lightning */}
      <LightningBolt />
    </div>
  )
}

export default CalendarComponent