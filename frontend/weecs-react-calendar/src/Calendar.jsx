import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
      />
      <p>Selected: {value.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;